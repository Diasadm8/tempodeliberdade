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
//    A ordem da lista é a ordem em que as fotos aparecem no site.
const FOTOS = [
  { arquivo: 'foto01.jpg', legenda: 'Adoração ao Santíssimo' },
  { arquivo: 'foto02.jpg', legenda: 'Casa cheia' },
  { arquivo: 'foto57.jpg', legenda: 'Adoração no Êxodo' },
  { arquivo: 'foto03.jpg', legenda: 'Pregação' },
  { arquivo: 'foto55.jpg', legenda: 'Êxodo: casa cheia' },
  { arquivo: 'foto04.jpg', legenda: 'Tapete de Corpus Christi' },
  { arquivo: 'foto05.jpg', legenda: 'Intercessão' },
  { arquivo: 'foto56.jpg', legenda: 'Procissão com o Santíssimo' },
  { arquivo: 'foto06.jpg', legenda: 'Alegria de ser jovem' },
  { arquivo: 'foto54.jpg', legenda: 'Êxodo · Tempo de Liberdade' },
  { arquivo: 'foto07.jpg', legenda: 'Juventude no Santuário' },
  { arquivo: 'foto08.jpg', legenda: 'Louvor' },
  { arquivo: 'foto09.jpg', legenda: 'Tempo de Liberdade' },
  { arquivo: 'foto10.jpg', legenda: 'Momento de oração' },
  { arquivo: 'foto11.jpg', legenda: 'Animação' },
  { arquivo: 'foto43.jpg', legenda: 'Servindo na cozinha' },
  { arquivo: 'foto12.jpg', legenda: 'Missa com a juventude' },
  { arquivo: 'foto13.jpg', legenda: 'Mãos levantadas' },
  { arquivo: 'foto14.jpg', legenda: 'Acolhida' },
  { arquivo: 'foto44.jpg', legenda: 'Com o padre' },
  { arquivo: 'foto15.jpg', legenda: 'Encontro de sábado' },
  { arquivo: 'foto16.jpg', legenda: 'Oração pelos irmãos' },
  { arquivo: 'foto17.jpg', legenda: 'Arraiá do grupo' },
  { arquivo: 'foto45.jpg', legenda: 'Noite de encontro' },
  { arquivo: 'foto18.jpg', legenda: 'Pregação' },
  { arquivo: 'foto19.jpg', legenda: 'Dança' },
  { arquivo: 'foto20.jpg', legenda: 'Grande encontro' },
  { arquivo: 'foto46.jpg', legenda: 'Antes do encontro' },
  { arquivo: 'foto21.jpg', legenda: 'Escuta da Palavra' },
  { arquivo: 'foto22.jpg', legenda: 'Diante da Cruz da Trindade Santa' },
  { arquivo: 'foto23.jpg', legenda: 'Juventude no Santuário' },
  { arquivo: 'foto47.jpg', legenda: 'Servos reunidos' },
  { arquivo: 'foto24.jpg', legenda: 'Oração' },
  { arquivo: 'foto25.jpg', legenda: 'Celebração' },
  { arquivo: 'foto26.jpg', legenda: 'Ministério de Música' },
  { arquivo: 'foto48.jpg', legenda: 'Bem-vindos, novos servos!' },
  { arquivo: 'foto27.jpg', legenda: 'Encontro' },
  { arquivo: 'foto28.jpg', legenda: 'Amizade' },
  { arquivo: 'foto29.jpg', legenda: 'Juntos' },
  { arquivo: 'foto49.jpg', legenda: 'Momento de louvor' },
  { arquivo: 'foto30.jpg', legenda: 'Louvor e adoração' },
  { arquivo: 'foto31.jpg', legenda: 'No Santuário' },
  { arquivo: 'foto32.jpg', legenda: 'Juntos na missão' },
  { arquivo: 'foto50.jpg', legenda: 'Oração de intercessão' },
  { arquivo: 'foto33.jpg', legenda: 'Alegria de servir' },
  { arquivo: 'foto34.jpg', legenda: 'Família reunida' },
  { arquivo: 'foto35.jpg', legenda: 'Noite de celebração' },
  { arquivo: 'foto51.jpg', legenda: 'Louvor' },
  { arquivo: 'foto36.jpg', legenda: 'Amigos na fé' },
  { arquivo: 'foto37.jpg', legenda: 'Família Tempo de Liberdade' },
  { arquivo: 'foto38.jpg', legenda: 'Noite de louvor' },
  { arquivo: 'foto52.jpg', legenda: 'Equipe do Êxodo' },
  { arquivo: 'foto39.jpg', legenda: 'Nossa juventude' },
  { arquivo: 'foto40.jpg', legenda: 'Tempo de Liberdade' },
  { arquivo: 'foto41.jpg', legenda: 'Encontro' },
  { arquivo: 'foto53.jpg', legenda: 'Partilha e amizade' },
  { arquivo: 'foto42.jpg', legenda: 'Louvor' },
  { arquivo: 'foto58.jpg', legenda: 'Alegria no Êxodo' },
  { arquivo: 'foto59.jpg', legenda: 'Louvor no Êxodo' },
];

// Quantas fotos aparecem antes do botão "Ver mais fotos"
const FOTOS_POR_VEZ = 12;

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

// Galeria: monta as fotos, mostra aos poucos e abre em tela cheia ao clicar
const fotos = document.getElementById('fotos');
const verMais = document.getElementById('ver-mais');
const telaCheia = document.getElementById('tela-cheia');
const telaCheiaImg = document.getElementById('tela-cheia-img');
const telaCheiaLegenda = document.getElementById('tela-cheia-legenda');
let mostrando = 0;
let atual = 0;

FOTOS.forEach((f, i) => {
  const fig = document.createElement('figure');
  fig.className = 'foto';
  fig.hidden = true;
  const img = document.createElement('img');
  img.src = 'imagens/galeria/' + f.arquivo;
  img.alt = f.legenda;
  img.loading = 'lazy';
  img.onerror = () => fig.remove(); // se o arquivo não existir, a foto simplesmente não aparece
  const legenda = document.createElement('figcaption');
  legenda.textContent = f.legenda;
  fig.append(img, legenda);
  fig.addEventListener('click', () => abrirFoto(i));
  fotos.append(fig);
});

function mostrarMais() {
  mostrando = Math.min(mostrando + FOTOS_POR_VEZ, FOTOS.length);
  [...fotos.children].forEach((fig, i) => { if (i < mostrando) fig.hidden = false; });
  const restantes = FOTOS.length - mostrando;
  verMais.hidden = restantes <= 0;
  verMais.textContent = `Ver mais fotos (${restantes})`;
}
verMais.addEventListener('click', mostrarMais);
mostrarMais();

function abrirFoto(i) {
  atual = (i + FOTOS.length) % FOTOS.length;
  telaCheiaImg.src = 'imagens/galeria/' + FOTOS[atual].arquivo;
  telaCheiaImg.alt = FOTOS[atual].legenda;
  telaCheiaLegenda.textContent = `${FOTOS[atual].legenda} · ${atual + 1} de ${FOTOS.length}`;
  telaCheia.hidden = false;
  document.body.style.overflow = 'hidden';
}
function fecharFoto() {
  telaCheia.hidden = true;
  document.body.style.overflow = '';
}
document.getElementById('tela-cheia-anterior').addEventListener('click', e => { e.stopPropagation(); abrirFoto(atual - 1); });
document.getElementById('tela-cheia-proxima').addEventListener('click', e => { e.stopPropagation(); abrirFoto(atual + 1); });
telaCheia.addEventListener('click', e => { if (e.target === telaCheia || e.target.id === 'tela-cheia-fechar') fecharFoto(); });
document.addEventListener('keydown', e => {
  if (telaCheia.hidden) return;
  if (e.key === 'Escape') fecharFoto();
  if (e.key === 'ArrowLeft') abrirFoto(atual - 1);
  if (e.key === 'ArrowRight') abrirFoto(atual + 1);
});
// No celular: arrastar o dedo para o lado troca de foto
let toqueX = null;
telaCheia.addEventListener('touchstart', e => { toqueX = e.touches[0].clientX; }, { passive: true });
telaCheia.addEventListener('touchend', e => {
  if (toqueX === null) return;
  const dx = e.changedTouches[0].clientX - toqueX;
  if (Math.abs(dx) > 50) abrirFoto(atual + (dx < 0 ? 1 : -1));
  toqueX = null;
});

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
