<?php

	require_once 'includes/config.php';

	//if not logged in redirect to login page
	if(!$user->is_logged_in()){ header('Location: index.php'); }

	$doctorTab = "SELECT * FROM doctor ORDER BY doctordate DESC, doctortime DESC";

	$stmt = $db->prepare($doctorTab);
	$stmt->execute();

	$userData = array();

	while($row=$stmt->fetch(PDO::FETCH_ASSOC)){

		$userData['Doctor'][] = $row;

	}

	echo json_encode($userData);

?>
