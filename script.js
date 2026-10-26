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
//    r = proporção da foto (largura dividida pela altura). Serve para as fotos
//    se encaixarem sem "pular" enquanto carregam. Se não souber, pode apagar o "r".
const FOTOS = [
  { arquivo: 'foto01.jpg', r: 0.860 },
  { arquivo: 'foto02.jpg', r: 1.333 },
  { arquivo: 'foto57.jpg', r: 1.510 },
  { arquivo: 'foto68.jpg', r: 0.861 },
  { arquivo: 'foto03.jpg', r: 1.000 },
  { arquivo: 'foto55.jpg', r: 1.510 },
  { arquivo: 'foto04.jpg', r: 1.327 },
  { arquivo: 'foto05.jpg', r: 0.764 },
  { arquivo: 'foto69.jpg', r: 0.750 },
  { arquivo: 'foto56.jpg', r: 1.510 },
  { arquivo: 'foto06.jpg', r: 1.336 },
  { arquivo: 'foto54.jpg', r: 1.510 },
  { arquivo: 'foto07.jpg', r: 1.333 },
  { arquivo: 'foto08.jpg', r: 1.333 },
  { arquivo: 'foto60.jpg', r: 0.800 },
  { arquivo: 'foto09.jpg', r: 0.750 },
  { arquivo: 'foto10.jpg', r: 0.751 },
  { arquivo: 'foto61.jpg', r: 0.800 },
  { arquivo: 'foto11.jpg', r: 1.000 },
  { arquivo: 'foto43.jpg', r: 0.750 },
  { arquivo: 'foto62.jpg', r: 0.800 },
  { arquivo: 'foto13.jpg', r: 0.800 },
  { arquivo: 'foto14.jpg', r: 1.000 },
  { arquivo: 'foto63.jpg', r: 0.750 },
  { arquivo: 'foto44.jpg', r: 1.333 },
  { arquivo: 'foto15.jpg', r: 0.860 },
  { arquivo: 'foto64.jpg', r: 0.754 },
  { arquivo: 'foto16.jpg', r: 0.826 },
  { arquivo: 'foto17.jpg', r: 1.333 },
  { arquivo: 'foto65.jpg', r: 0.754 },
  { arquivo: 'foto45.jpg', r: 1.349 },
  { arquivo: 'foto18.jpg', r: 0.750 },
  { arquivo: 'foto66.jpg', r: 0.859 },
  { arquivo: 'foto19.jpg', r: 1.000 },
  { arquivo: 'foto20.jpg', r: 1.500 },
  { arquivo: 'foto67.jpg', r: 1.333 },
  { arquivo: 'foto46.jpg', r: 0.600 },
  { arquivo: 'foto22.jpg', r: 1.914 },
  { arquivo: 'foto70.jpg', r: 0.751 },
  { arquivo: 'foto23.jpg', r: 1.778 },
  { arquivo: 'foto47.jpg', r: 1.667 },
  { arquivo: 'foto71.jpg', r: 0.750 },
  { arquivo: 'foto24.jpg', r: 0.751 },
  { arquivo: 'foto25.jpg', r: 1.501 },
  { arquivo: 'foto72.jpg', r: 0.750 },
  { arquivo: 'foto26.jpg', r: 1.500 },
  { arquivo: 'foto48.jpg', r: 1.000 },
  { arquivo: 'foto73.jpg', r: 0.750 },
  { arquivo: 'foto27.jpg', r: 1.502 },
  { arquivo: 'foto28.jpg', r: 0.751 },
  { arquivo: 'foto74.jpg', r: 0.750 },
  { arquivo: 'foto29.jpg', r: 1.334 },
  { arquivo: 'foto49.jpg', r: 1.668 },
  { arquivo: 'foto75.jpg', r: 0.751 },
  { arquivo: 'foto30.jpg', r: 0.800 },
  { arquivo: 'foto31.jpg', r: 0.751 },
  { arquivo: 'foto76.jpg', r: 0.751 },
  { arquivo: 'foto32.jpg', r: 1.045 },
  { arquivo: 'foto50.jpg', r: 0.600 },
  { arquivo: 'foto77.jpg', r: 0.750 },
  { arquivo: 'foto33.jpg', r: 1.000 },
  { arquivo: 'foto34.jpg', r: 1.333 },
  { arquivo: 'foto78.jpg', r: 0.754 },
  { arquivo: 'foto35.jpg', r: 1.502 },
  { arquivo: 'foto51.jpg', r: 1.667 },
  { arquivo: 'foto79.jpg', r: 0.764 },
  { arquivo: 'foto36.jpg', r: 1.333 },
  { arquivo: 'foto37.jpg', r: 1.500 },
  { arquivo: 'foto80.jpg', r: 0.750 },
  { arquivo: 'foto38.jpg', r: 1.333 },
  { arquivo: 'foto52.jpg', r: 1.778 },
  { arquivo: 'foto81.jpg', r: 0.750 },
  { arquivo: 'foto39.jpg', r: 1.333 },
  { arquivo: 'foto40.jpg', r: 1.333 },
  { arquivo: 'foto82.jpg', r: 0.749 },
  { arquivo: 'foto41.jpg', r: 1.335 },
  { arquivo: 'foto53.jpg', r: 1.778 },
  { arquivo: 'foto83.jpg', r: 0.750 },
  { arquivo: 'foto42.jpg', r: 1.335 },
  { arquivo: 'foto58.jpg', r: 1.510 },
  { arquivo: 'foto59.jpg', r: 1.510 },
];

// Quantas fotos aparecem antes do botão "Ver mais fotos"
const FOTOS_POR_VEZ = 12;

/* ---------------------------------------------------------
   Daqui para baixo não é preciso mexer.
   --------------------------------------------------------- */

const semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// no celular a galeria mostra menos fotos de cada vez (menos rolagem)
const porVez = window.matchMedia('(max-width: 900px)').matches ? 8 : FOTOS_POR_VEZ;

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

// Menu em telas menores: botão abre e fecha a lista de seções
const menuBotao = document.getElementById('menu-botao');
const menuNav = document.getElementById('menu-nav');
function fecharMenu() { menuNav.classList.remove('aberto'); menuBotao.setAttribute('aria-expanded', 'false'); }
menuBotao.addEventListener('click', () => {
  const aberto = menuNav.classList.toggle('aberto');
  menuBotao.setAttribute('aria-expanded', String(aberto));
});
menuNav.addEventListener('click', e => { if (e.target.tagName === 'A') fecharMenu(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') fecharMenu(); });
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

// Galeria: colunas fixas. Cada foto é colocada uma única vez, na coluna mais baixa,
// e nunca mais muda de lugar (por isso "Ver mais" não embaralha nada).
const fotos = document.getElementById('fotos');
const verMais = document.getElementById('ver-mais');
const telaCheia = document.getElementById('tela-cheia');
const telaCheiaImg = document.getElementById('tela-cheia-img');
const telaCheiaLegenda = document.getElementById('tela-cheia-legenda');
let mostrando = 0;
let atual = 0;

// um elemento para cada foto, criado de uma vez; a imagem só carrega quando chega perto da tela
const elementos = FOTOS.map((f, i) => {
  const fig = document.createElement('figure');
  fig.className = 'foto';
  fig.style.aspectRatio = f.r || 0.75; // reserva o espaço da foto antes de ela carregar
  const img = document.createElement('img');
  img.src = 'imagens/galeria/' + f.arquivo;
  img.alt = 'Foto do grupo Tempo de Liberdade';
  img.loading = 'lazy';
  img.onerror = () => fig.remove(); // se o arquivo não existir, a foto simplesmente não aparece
  fig.append(img);
  fig.addEventListener('click', () => abrirFoto(i));
  return fig;
});

let colunas = [], alturas = [];
function montarColunas() {
  const n = window.matchMedia('(max-width: 900px)').matches ? 2 : 3;
  if (colunas.length === n) return;
  fotos.replaceChildren();
  colunas = Array.from({ length: n }, () => { const c = document.createElement('div'); c.className = 'fotos-coluna'; fotos.append(c); return c; });
  alturas = new Array(n).fill(0);
  for (let i = 0; i < mostrando; i++) colocar(i); // refaz o que já estava na tela, na mesma ordem
}
function colocar(i) {
  let c = 0;
  alturas.forEach((h, k) => { if (h < alturas[c] - 0.001) c = k; }); // coluna mais baixa (a da esquerda se empatar)
  colunas[c].append(elementos[i]);
  alturas[c] += 1 / (FOTOS[i].r || 0.75) + 0.04;
}
function mostrarMais() {
  const ate = Math.min(mostrando + porVez, FOTOS.length);
  for (let i = mostrando; i < ate; i++) colocar(i);
  mostrando = ate;
  const restantes = FOTOS.length - mostrando;
  verMais.hidden = restantes <= 0;
  verMais.textContent = `Ver mais fotos (${restantes})`;
}
montarColunas();
window.addEventListener('resize', montarColunas);
verMais.addEventListener('click', mostrarMais);
mostrarMais();

function abrirFoto(i) {
  atual = (i + FOTOS.length) % FOTOS.length;
  telaCheiaImg.src = 'imagens/galeria/' + FOTOS[atual].arquivo;
  telaCheiaImg.alt = 'Foto do grupo Tempo de Liberdade';
  telaCheiaLegenda.textContent = `${atual + 1} de ${FOTOS.length}`;
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
  if (brasasVisiveis) requestAnimationFrame(desenharBrasas); else brasasRodando = false;
}
// as brasas só se movem enquanto a seção está na tela (poupa bateria no celular)
let brasasVisiveis = false, brasasRodando = false;
if (!semMovimento) {
  ajustarCanvas();
  window.addEventListener('resize', ajustarCanvas);
  new IntersectionObserver(([e]) => {
    brasasVisiveis = e.isIntersecting;
    if (brasasVisiveis && !brasasRodando) { brasasRodando = true; desenharBrasas(); }
  }).observe(document.getElementById('sarca'));
}

// Barra de progresso de leitura e movimento suave dos enfeites ao rolar
const barra = document.getElementById('progresso');
const enfeites = [...document.querySelectorAll('[data-par]')];
let aguardando = false;
function aoRolar() {
  const max = document.documentElement.scrollHeight - innerHeight;
  barra.style.transform = `scaleX(${max > 0 ? Math.min(scrollY / max, 1) : 0})`;
  if (!semMovimento) {
    enfeites.forEach(el => {
      const r = el.parentElement.getBoundingClientRect();
      if (r.bottom < -300 || r.top > innerHeight + 300) return; // fora da tela: não mexe
      const centro = r.top + r.height / 2 - innerHeight / 2;
      el.style.setProperty('--py', `${(centro * parseFloat(el.dataset.par)).toFixed(1)}px`);
    });
  }
  aguardando = false;
}
window.addEventListener('scroll', () => { if (!aguardando) { aguardando = true; requestAnimationFrame(aoRolar); } }, { passive: true });
aoRolar();

// Números que "contam" até o valor final quando aparecem na tela
document.querySelectorAll('[data-contar]').forEach(el => {
  const alvo = parseInt(el.textContent, 10);
  if (semMovimento || !alvo) return;
  el.textContent = '0';
  new IntersectionObserver(([e], obs) => {
    if (!e.isIntersecting) return;
    obs.disconnect();
    const inicio = performance.now();
    const passo = agora => {
      const t = Math.min((agora - inicio) / 1400, 1);
      el.textContent = Math.round(alvo * (1 - Math.pow(1 - t, 3)));
      if (t < 1) requestAnimationFrame(passo);
    };
    requestAnimationFrame(passo);
  }, { threshold: 0.6 }).observe(el);
});

// Carrosséis (no celular): bolinhas que mostram em qual cartão você está
document.querySelectorAll('.carrossel').forEach(c => {
  const pontos = document.createElement('div');
  pontos.className = 'pontinhos';
  pontos.setAttribute('aria-hidden', 'true');
  [...c.children].forEach(() => pontos.append(document.createElement('i')));
  c.after(pontos);
  const marcar = () => {
    const w = c.children[0].getBoundingClientRect().width + 12;
    const i = Math.min(Math.round(c.scrollLeft / w), c.children.length - 1);
    [...pontos.children].forEach((p, k) => p.classList.toggle('ativo', k === i));
  };
  c.addEventListener('scroll', () => requestAnimationFrame(marcar), { passive: true });
  marcar();
});
