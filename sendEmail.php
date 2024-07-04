<?php
error_reporting(E_ALL);
ini_set('display_errors', 0);
date_default_timezone_set('America/Argentina/Buenos_Aires');

header('Access-Control-Allow-Origin: https://cjcastrogalante.com');
header("Access-Control-Allow-Methods: POST");
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    // Verificar si los datos están presentes y no vacíos
    if (!isset($data['name']) || empty($data['name']) ||
        !isset($data['email']) || empty($data['email']) ||
        !isset($data['message']) || empty($data['message'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Todos los campos son requeridos.']);
        exit;
    }

    $name = htmlspecialchars($data['name']);
    $email = htmlspecialchars($data['email']);
    $message = htmlspecialchars($data['message']);

    // Configuración para enviar correo
    $to = "hi@cjcastrogalante.com";
    $subject = "Nuevo mensaje del formulario de contacto";
    $body = "Nombre: $name\nEmail: $email\nMensaje:\n$message";
    $headers = "From: $email";

    // Envío del correo
    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200);
        echo json_encode(['success' => true, 'message' => 'Mensaje enviado con éxito.']);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Error al enviar el mensaje.']);
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido.']);
}
?>
