var qrcode = new QRCode(document.getElementById("qrcode"), {
	text: "https://au-bon-pain.fr/",
	width: 110,
	height: 110,
	colorDark : "#9E1B32",
	colorLight : "#ffffff",
	correctLevel : QRCode.CorrectLevel.H
});
