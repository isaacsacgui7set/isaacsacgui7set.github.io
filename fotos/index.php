<?php
// index.php — Galeria amb miniatures + login (usuari: laia  / contrasenya: mbkp8029!$)

session_start();

// ---------------- CONFIG ----------------
$USER = 'laia';
$PASS = 'mbkp8029!$';                     // contrasenya tal qual, com has demanat
$dir = '/var/www/isaacguisset.cat/fotos'; // ruta absoluta on estan les fotos
$thumbDir = $dir . '/thumbs';             // carpeta on es generen les miniatures
$webPath = '/fotos';                      // ruta base web per a les imatges
$allowed = ['jpg','jpeg','png','gif','webp'];
$thumbWidth = 300;                        // ample miniatura en px
// -----------------------------------------

// Simple protection contra bruteforce (mínim)
if (!isset($_SESSION['attempts'])) $_SESSION['attempts'] = 0;
if ($_SESSION['attempts'] > 10) {
    http_response_code(429);
    echo "Massa intents. Prova més tard.";
    exit;
}

// Gestió login
$loginError = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'login') {
    $u = $_POST['username'] ?? '';
    $p = $_POST['password'] ?? '';
    if ($u === $USER && $p === $PASS) {
        session_regenerate_id(true);
        $_SESSION['logged'] = true;
        $_SESSION['user'] = $USER;
        $_SESSION['last_activity'] = time();
        $_SESSION['attempts'] = 0;
        header('Location: ' . strtok($_SERVER["REQUEST_URI"],'?'));
        exit;
    } else {
        $_SESSION['attempts']++;
        $loginError = 'Usuari o contrasenya incorrectes.';
    }
}

// Logout
if (isset($_GET['logout'])) {
    session_unset();
    session_destroy();
    header('Location: ' . strtok($_SERVER["REQUEST_URI"],'?'));
    exit;
}

// Si no està autenticat, mostrar pàgina de login
if (empty($_SESSION['logged'])):
?>
<!doctype html>
<html lang="ca">
<head>
  <meta charset="utf-8">
  <title>Login — Galeria</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    body { background: linear-gradient(120deg,#071025,#0b1220); color:#e6eef8; font-family:Inter,system-ui,Segoe UI,Roboto; height:100vh; display:flex; align-items:center; justify-content:center; margin:0; }
    .box { background:#0f172a; padding:32px; border-radius:12px; width:100%; max-width:420px; box-shadow:0 8px 30px rgba(2,6,23,0.6); }
    .btn-primary { background:#6366f1; border:none; }
  </style>
</head>
<body>
  <div class="box">
    <h3 class="mb-3 text-center">🔒 Accés privat - Galeria</h3>
    <?php if ($loginError): ?>
      <div class="alert alert-danger"><?=htmlspecialchars($loginError)?></div>
    <?php endif; ?>
    <form method="post" novalidate>
      <input type="hidden" name="action" value="login">
      <div class="mb-3">
        <label class="form-label">Usuari</label>
        <input name="username" class="form-control" required autofocus>
      </div>
      <div class="mb-3">
        <label class="form-label">Contrasenya</label>
        <input name="password" type="password" class="form-control" required>
      </div>
      <div class="d-grid">
        <button class="btn btn-primary">Entrar</button>
      </div>
    </form>
    <p class="mt-3 small text-muted">HOLA <strong>laia</strong></p>
  </div>
</body>
</html>
<?php
exit;
endif;

// ---- A partir d'aquí: l'usuari està autenticat ----

// Assegura que la carpeta de miniatures existeixi
if (!is_dir($thumbDir)) {
    @mkdir($thumbDir, 0755, true);
}

// Llista fitxers vàlids i genera miniatures si cal
$photos = [];
if (is_dir($dir)) {
    $entries = scandir($dir);
    foreach ($entries as $file) {
        if ($file === '.' || $file === '..') continue;
        $path = $dir . '/' . $file;
        if (!is_file($path)) continue;
        $ext = strtolower(pathinfo($file, PATHINFO_EXTENSION));
        if (!in_array($ext, $allowed)) continue;

        // Generar miniatura si no existeix
        $thumbPath = $thumbDir . '/' . $file;
        if (!file_exists($thumbPath)) {
            // protegim contra arxius corruptes amb @ i comprovar resources
            $data = @file_get_contents($path);
            if ($data !== false) {
                $src = @imagecreatefromstring($data);
                if ($src !== false) {
                    $w = imagesx($src);
                    $h = imagesy($src);
                    $nw = $thumbWidth;
                    $nh = intval($h * ($nw / max(1,$w)));
                    $dst = imagecreatetruecolor($nw, $nh);
                    // conservar alpha per PNG/WebP
                    if (in_array($ext, ['png','webp'])) {
                        imagealphablending($dst, false);
                        imagesavealpha($dst, true);
                        $transparent = imagecolorallocatealpha($dst, 0, 0, 0, 127);
                        imagefilledrectangle($dst, 0, 0, $nw, $nh, $transparent);
                    }
                    imagecopyresampled($dst, $src, 0,0,0,0,$nw,$nh,$w,$h);
                    // Escriure miniatura segons tipus
                    if ($ext === 'png') imagepng($dst, $thumbPath);
                    elseif ($ext === 'webp') imagewebp($dst, $thumbPath, 80);
                    else imagejpeg($dst, $thumbPath, 85);
                    imagedestroy($dst);
                    imagedestroy($src);
                }
            }
        }

        $photos[] = $file;
    }
    // ordenar per nom (pots canviar per data si prefereixes)
    natcasesort($photos);
    $photos = array_values($photos);
}

// ---- HTML galeria protegida ----
?>
<!doctype html>
<html lang="ca">
<head>
  <meta charset="utf-8">
  <title>Galeria — isaacguisset.cat</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    body { background: linear-gradient(120deg,#071025,#08122a); color:#e6eef8; font-family:Inter,system-ui; margin:0; min-height:100vh; }
    header { display:flex; justify-content:space-between; align-items:center; padding:18px 28px; }
    .brand { font-weight:700; font-size:1.05rem; }
    .logout { color:#fff; text-decoration:none; background:#1f2937; padding:8px 12px; border-radius:8px; }
    .container-grid { padding: 20px; }
    .grid { display:grid; grid-template-columns: repeat(auto-fill, minmax(220px,1fr)); gap:18px; }
    .card-photo { background:#0f172a; border-radius:12px; overflow:hidden; box-shadow: 0 6px 18px rgba(0,0,0,0.45); transition:transform .18s ease; }
    .card-photo:hover { transform:translateY(-4px); }
    .card-photo img { width:100%; height:160px; object-fit:cover; display:block; }
    .actions { padding:10px; display:flex; justify-content:space-between; gap:8px; align-items:center; }
    .btn-download { background:#3b82f6; color:#fff; border-radius:8px; padding:7px 10px; text-decoration:none; display:inline-block; }
    .btn-preview { background:transparent; color:#cbd5e1; border:1px solid rgba(255,255,255,0.06); padding:7px 10px; border-radius:8px; text-decoration:none; }
    footer { text-align:center; padding:20px; color:#94a3b8; font-size:0.9rem; margin-top:30px; }
  </style>
</head>
<body>
<header>
  <div class="brand">📸 Galeria privada — isaacguisset.cat</div>
  <div>
    <a class="logout" href="?logout=1">Tancar sessió</a>
  </div>
</header>

<div class="container-grid">
  <?php if (empty($photos)): ?>
    <div class="alert alert-warning">No s'han trobat fotos a <code>/var/www/isaacguisset.cat/fotos/</code>.</div>
  <?php else: ?>
    <div class="grid">
      <?php foreach ($photos as $file): 
          $thumbUrl = $webPath . '/thumbs/' . rawurlencode($file);
          $origUrl  = $webPath . '/' . rawurlencode($file);
      ?>
        <div class="card-photo">
          <a href="<?=htmlspecialchars($origUrl)?>" target="_blank" style="display:block">
            <img src="<?=htmlspecialchars($thumbUrl)?>" alt="<?=htmlspecialchars($file)?>" loading="lazy">
          </a>
          <div class="actions">
            <a class="btn-preview" href="<?=htmlspecialchars($origUrl)?>" target="_blank">Veure</a>
            <a class="btn-download" href="<?=htmlspecialchars($origUrl)?>" download>⬇️ Descarregar</a>
          </div>
        </div>
      <?php endforeach; ?>
    </div>
  <?php endif; ?>
  <footer>© <?=date('Y')?> isaacguisset.cat — Accés protegit</footer>
</div>
</body>
</html>
