// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

var index = 0;

function proximaImagem(){
	index = index >=4 ? 0 : index+1;
	let img = document.getElementById('slide');
	img.src = servidorDasImagens + todasAsImagens[index];
}

function anteriorImagem(){
	index = index <=0 ? 4 : index-1;
	let img = document.getElementById('slide');
	img.src = servidorDasImagens + todasAsImagens[index];
}