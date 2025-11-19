<?php
$usuari_correcte = 'isaacguissetsanchez';
$contrasenya_correcta = 'g4nd4lf3l6ris#@fr0d0';

if (!isset($_SERVER['PHP_AUTH_USER']) || !isset($_SERVER['PHP_AUTH_PW'])
    || $_SERVER['PHP_AUTH_USER'] !== $usuari_correcte
    || $_SERVER['PHP_AUTH_PW'] !== $contrasenya_correcta) {

    header('WWW-Authenticate: Basic realm="Accés restringit"');
    header('HTTP/1.0 401 Unauthorized');
    echo json_encode(['error' => 'No tens permís per accedir a aquest recurs']);
    exit;
}

$dir = '/var/www/isaacguisset.cat/contactes';
$files = glob($dir . '/contacte_*.txt');
$data = [];

foreach ($files as $file) {
    $content = file_get_contents($file);
    preg_match('/Nom:\s*(.+)/', $content, $nom);
    preg_match('/Email:\s*(.+)/', $content, $email);
    preg_match('/Missatge:\n([\s\S]+)\n\nEnviat el:/', $content, $missatge);
    preg_match('/Enviat el:\s*(.+)/', $content, $dataHora);

    $data[] = [
        'nom' => $nom[1] ?? '',
        'email' => $email[1] ?? '',
        'missatge' => trim($missatge[1] ?? ''),
        'data' => $dataHora[1] ?? ''
        
    ];
}

header('Content-Type: application/json');
echo json_encode($data);
