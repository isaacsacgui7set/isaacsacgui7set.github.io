<?php
$usuari_correcte = 'isaacguissetsanchez';
$contrasenya_correcta = 'g4nd4lf3l6ris#@fr0d0'; 

if (!isset($_SERVER['PHP_AUTH_USER']) || !isset($_SERVER['PHP_AUTH_PW'])
    || $_SERVER['PHP_AUTH_USER'] !== $usuari_correcte
    || $_SERVER['PHP_AUTH_PW'] !== $contrasenya_correcta) {

    header('WWW-Authenticate: Basic realm="Accés restringit"');
    header('HTTP/1.0 401 Unauthorized');
    echo 'Accés denegat.';
    exit;
}
?>
<!DOCTYPE html>
<html lang="ca">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Veure Contactes - Isaac Guisset</title>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet" />
<link rel="icon" href="/imatges/icones/icon.png" type="image/png" />

<style>
  :root {
    --color-bg1: #9b59b6;
    --color-bg2: black;
    --color-accent: #9b59b6;
    --color-text: #f5f5f5;
  }
  body {
    font-family: 'Orbitron', sans-serif;
    background: linear-gradient(200deg, var(--color-bg1), var(--color-bg2));
    color: var(--color-text);
    padding: 30px;
    max-width: 900px;
    margin: auto;
  }
  h1 {
    text-align: center;
    color: var(--color-accent);
    margin-bottom: 30px;
  }
  .contacte {
    background: #2a2a2a;
    border-radius: 15px;
    padding: 45px;
    margin-bottom: 20px;
    box-shadow: 0 0 15px rgba(155, 89, 182, 0.5);
  }
  .contacte h3 {
    margin-bottom: 5px;
  }
  .contacte small {
    color: #bbb;
    display: block;
    margin-bottom: 15px;
  }
  .contacte p {
    white-space: pre-wrap;
  }
  .no-contactes {
    text-align: center;
    font-size: 1.3rem;
    color: #999;
  }
</style>
</head>
<body>

<h1>Contactes rebuts</h1>
<div id="contactesContainer">
  <p class="no-contactes">Carregant...</p>
</div>

<script>
  async function carregarContactes() {
    const container = document.getElementById('contactesContainer');
    container.innerHTML = '<p class="no-contactes">Carregant...</p>';

    try {
      const res = await fetch('llegir_contactes.php', {
        headers: {
          'Authorization': 'Basic ' + btoa('<?php echo $usuari_correcte . ":" . $contrasenya_correcta; ?>')
        }
      });
      if (!res.ok) throw new Error('Error al carregar dades');
      const dades = await res.json();
      if (dades.length === 0) {
        container.innerHTML = '<p class="no-contactes">No hi ha contactes rebuts.</p>';
        return;
      }
      container.innerHTML = '';
      dades.forEach(c => {
        const div = document.createElement('div');
        div.className = 'contacte';
        div.innerHTML = `
          <h3>${c.nom}</h3>
          <small>${c.email} | ${c.data}</small>
          <p>${c.missatge}</p>
        `;
        container.appendChild(div);
      });
    } catch (err) {
      container.innerHTML = '<p class="no-contactes">No s\'han pogut carregar els contactes.</p>';
      console.error(err);
    }
  }

  carregarContactes();
</script>

</body>
</html>
