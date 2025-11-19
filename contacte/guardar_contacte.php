<?php
header('Content-Type: application/json');
$dir = '/var/www/isaacguisset.cat/contactes';

if (!is_dir($dir)) {
    mkdir($dir, 0755, true);
}

$nom = trim($_POST['nom'] ?? '');
$email = trim($_POST['email'] ?? '');
$missatge = trim($_POST['missatge'] ?? '');

if (!$nom || !$email || !$missatge) {
    echo json_encode(['success' => false, 'error' => 'Tots els camps són obligatoris.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'error' => 'Correu electrònic invàlid.']);
    exit;
}

$filename = $dir . '/contacte_' . date('Ymd_His') . '_' . preg_replace('/[^a-z0-9]/i', '_', $nom) . '.txt';
$content = "Nom: $nom\nEmail: $email\nMissatge:\n$missatge\n\n".
           "Enviat el: " . date('d/m/Y H:i:s');
if (file_put_contents($filename, $content) !== false) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'error' => 'No s\'ha pogut desar el missatge.']);
}
