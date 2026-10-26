/* =========================================================
   TEMPO DE LIBERDADE · funções do site
   As duas listas abaixo são as únicas coisas que você
   normalmente vai precisar mudar.
   ========================================================= */

// 1) PALAVRAS do título animado ("Tempo de ...")
const PALAVRAS = ['fé', 'louvor', 'adoração', 'amizade', 'missão', 'liberdade'];

// 2) FOTOS da galeria
//    Coloque as fotos na pasta imagens/galeria e escreva o nome do arquivo aqui.
//    Use fotos .jpg de até ~500 KB para o site ficar rápido.
const FOTOS = [
  { arquivo: 'foto1.jpg', legenda: 'Encontro de sábado' },
  { arquivo: 'foto2.jpg', legenda: 'Louvor' },
  { arquivo: 'foto3.jpg', legenda: 'Adoração' },
  { arquivo: 'foto4.jpg', legenda: 'Nossa juventude' },
  { arquivo: 'foto5.jpg', legenda: 'Retiro' },
  { arquivo: 'foto6.jpg', legenda: 'Missão' },
];

/* ---------------------------------------------------------
   Daqui para baixo não é preciso mexer.
   --------------------------------------------------------- */

const semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Ano no rodapé e anos de caminhada (fundação: 5 de dezembro de 2009)
const hoje = new Date();
document.getElementById('ano').textContent = hoje.getFullYear();
const fundacao = new Date(2009, 11, 5);
let anos = hoje.getFullYear() - fundacao.getFullYear();
if (hoje < new Date(hoje.getFullYear(), 11, 5)) anos--;
document.getElementById('anos').textContent = anos;

// Título animado: apaga e escreve as palavras uma a uma
const palavra = document.getElementById('palavra');
if (!semMovimento) {
  let i = PALAVRAS.length - 1;
  const escrever = async () => {
    const espera = ms => new Promise(r => setTimeout(r, ms));
    while (true) {
      await espera(i === PALAVRAS.length - 1 ? 3200 : 1600); // "liberdade" fica mais tempo
      for (let t = palavra.textContent.length; t >= 0; t--) {
        palavra.textContent = palavra.textContent.slice(0, t);
        await espera(45);
      }
      i = (i + 1) % PALAVRAS.length;
      for (const letra of PALAVRAS[i]) {
        palavra.textContent += letra;
        await espera(85);
      }
    }
  };
  escrever();
}

// Elementos surgem ao rolar a página
const observador = new IntersectionObserver(entradas => {
  entradas.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visivel');
      observador.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.revelar').forEach(el => observador.observe(el));

// Ministérios: destaca no menu de atalhos o ministério que está na tela
const atalhos = document.querySelectorAll('.min-atalhos a');
const observadorMinisterios = new IntersectionObserver(entradas => {
  entradas.forEach(e => {
    if (!e.isIntersecting) return;
    atalhos.forEach(a => {
      const ativo = a.getAttribute('href') === '#' + e.target.id;
      a.classList.toggle('ativo', ativo);
      if (ativo) a.parentElement.scrollTo({ left: a.offsetLeft - a.parentElement.clientWidth / 2 + a.offsetWidth / 2, behavior: 'smooth' });
    });
  });
}, { rootMargin: '-45% 0px -45% 0px' });
document.querySelectorAll('.ministerio').forEach(m => observadorMinisterios.observe(m));

// Contagem regressiva até o próximo sábado às 17h
function proximoEncontro(agora) {
  const alvo = new Date(agora);
  alvo.setHours(17, 0, 0, 0);
  alvo.setDate(alvo.getDate() + ((6 - agora.getDay() + 7) % 7));
  if (alvo <= agora) alvo.setDate(alvo.getDate() + 7);
  return alvo;
}
function atualizarContagem() {
  const agora = new Date();
  const titulo = document.getElementById('contagem-titulo');
  // Sábado entre 17h e 19h: o encontro está acontecendo
  if (agora.getDay() === 6 && agora.getHours() >= 17 && agora.getHours() < 19) {
    titulo.textContent = 'O encontro está acontecendo agora. Vem!';
  } else {
    titulo.textContent = 'Próximo encontro em';
  }
  let resto = Math.floor((proximoEncontro(agora) - agora) / 1000);
  const dias = Math.floor(resto / 86400); resto %= 86400;
  const horas = Math.floor(resto / 3600); resto %= 3600;
  const min = Math.floor(resto / 60);
  const seg = resto % 60;
  const dois = n => String(n).padStart(2, '0');
  document.getElementById('cd-dias').textContent = dias;
  document.getElementById('cd-horas').textContent = dois(horas);
  document.getElementById('cd-min').textContent = dois(min);
  document.getElementById('cd-seg').textContent = dois(seg);
}
atualizarContagem();
setInterval(atualizarContagem, 1000);

// Galeria: monta as fotos e abre em tela cheia ao clicar
const fotos = document.getElementById('fotos');
const telaCheia = document.getElementById('tela-cheia');
const telaCheiaImg = document.getElementById('tela-cheia-img');
FOTOS.forEach(f => {
  const fig = document.createElement('figure');
  fig.className = 'foto revelar';
  const img = document.createElement('img');
  img.src = 'imagens/galeria/' + f.arquivo;
  img.alt = f.legenda;
  img.loading = 'lazy';
  img.onerror = () => { img.remove(); fig.classList.add('vazia'); }; // foto ainda não colocada
  const legenda = document.createElement('figcaption');
  legenda.textContent = f.legenda;
  fig.append(img, legenda);
  fig.addEventListener('click', () => {
    if (fig.classList.contains('vazia')) return;
    telaCheiaImg.src = img.src;
    telaCheiaImg.alt = f.legenda;
    telaCheia.hidden = false;
  });
  fotos.append(fig);
  observador.observe(fig);
});
telaCheia.addEventListener('click', () => { telaCheia.hidden = true; });
document.addEventListener('keydown', e => { if (e.key === 'Escape') telaCheia.hidden = true; });

// Brasas subindo na seção da sarça ardente
const canvas = document.getElementById('brasas');
const ctx = canvas.getContext('2d');
let brasas = [];
function ajustarCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  const quantidade = Math.round(canvas.width / 18);
  brasas = Array.from({ length: quantidade }, () => novaBrasa(true));
}
function novaBrasa(espalhada) {
  return {
    x: Math.random() * canvas.width,
    y: espalhada ? Math.random() * canvas.height : canvas.height + 10,
    r: Math.random() * 2.2 + .6,
    v: Math.random() * .7 + .3,
    onda: Math.random() * Math.PI * 2,
  };
}
function desenharBrasas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  brasas.forEach((b, i) => {
    b.y -= b.v;
    b.onda += .02;
    b.x += Math.sin(b.onda) * .4;
    const vida = b.y / canvas.height; // some conforme sobe
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, ${140 + Math.round(vida * 80)}, 60, ${Math.max(vida, 0) * .9})`;
    ctx.shadowColor = '#ff8a2b';
    ctx.shadowBlur = 8;
    ctx.fill();
    if (b.y < -10) brasas[i] = novaBrasa(false);
  });
  requestAnimationFrame(desenharBrasas);
}
if (!semMovimento) {
  ajustarCanvas();
  window.addEventListener('resize', ajustarCanvas);
  desenharBrasas();
}
