<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta  http-equiv  = "refresh" content = "0, URL=..\..\index.html" >
    <title>Document</title>
</head>
<body>
    <?php
    $number = $_GET['number']; // Вытаскиваем
    $message =
    "Номер телефона: $number";
    $to = "vihorevs@gmail.com"; // Задаем получателя письма
    $from = "noreply-site.web.cofp.ru"; // От кого пришло письмо
    $subject = "Заказ с вашего сайта"; // Задаем тему письма
    $headers = "From: $from\r\nReply-To: $to\r\nContent-type: text/html; charset=utf-8\r\n"; // Формируем заголовок письма (при неправильном формировании может ломаться кодировка и т.д.)
    mail($to, $subject, $message, $headers)
?>
</body>
</html>
