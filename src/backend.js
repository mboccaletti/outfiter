/* Variáveis */

loop = "";
c = $('#tela')[0];
ctx = c.getContext("2d");
ccor = $('#tela_cor')[0];
cctx = ccor.getContext("2d");
cm = $('#montagem')[0];
mctx = cm.getContext("2d");
img_letras = $('#img_letras')[0];
letras = {" ": [0, 0, 4], A: [1, 0, 9], B: [2, 0, 8], C: [3, 0, 8], D: [4, 0, 9], E: [5, 0, 8], F: [6, 0, 8], G: [7, 0, 9], H: [8, 0, 9], I: [9, 0, 6], J: [10, 0, 7], K: [11, 0, 8], L: [12, 0, 8], M: [13, 0, 10], N: [14, 0, 9], O: [15, 0, 9], P: [16, 0, 8], Q: [17, 0, 9], R: [18, 0, 9], S: [19, 0, 8], T: [20, 0, 10], U: [21, 0, 9], V: [22, 0, 8], W: [23, 0, 10], X: [24, 0, 8], Y: [25, 0, 8], Z: [26, 0, 8], "'": [0, 1, 4], a: [1, 1, 8], b: [2, 1, 8], c: [3, 1, 7], d: [4, 1, 8], e: [5, 1, 8], f: [6, 1, 7], g: [7, 1, 8], h: [8, 1, 8], i: [9, 1, 4], j: [10, 1, 6], k: [11, 1, 8], l: [12, 1, 4], m: [13, 1, 10], n: [14, 1, 8], o: [15, 1, 8], p: [16, 1, 8], q: [17, 1, 8], r: [18, 1, 7], s: [19, 1, 7], t: [20, 1, 7], u: [21, 1, 8], v: [22, 1, 8], w: [23, 1, 10], x: [24, 1, 8], y: [25, 1, 8], z: [26, 1, 7], "0": [0, 2, 9], "1": [1, 2, 8], "2": [2, 2, 8], "3": [3, 2, 9], "4": [4, 2, 8], "5": [5, 2, 8], "6": [6, 2, 9], "7": [7, 2, 9], "8": [8, 2, 8], "9": [9, 2, 8], "-": [10, 2, 9], ",": [11, 2, 4]};

// Lista de Montarias
montarias = [['Nenhuma', 'None', 'Ninguna', 'Brak'], 'Armoured_War_Horse', 'Azudocus', 'Batcat', 'Black_Sheep', 'Black_Stag', 'Blackpelt', 'Blazebringer', 'Bloodcurl', 'Carpacosaurus', 'Cinderhoof', 'Copper_Fly', 'Coralripper', 'Crimson_Ray', 'Crystal_Wolf', 'Death_Crawler', 'Desert_King', 'Donkey', 'Doombringer', 'Dragonling', 'Draptor', 'Dromedary', 'Emerald_Wacoon', 'Emperor_Deer', 'Flamesteed', 'Flitterkatzen', 'Floating_Kashmir', 'Flying_Divan', 'Frostflare', 'Glacier_Vagabond', 'Glooth_Glider', 'Gnarlhound', 'Golden_Dragonfly', 'Gorongra‎', 'Hailstorm_Fury', 'Hellgrip', 'Highland_Yak', 'Ironblight', 'Jade_Lion', 'Jade_Pincer', 'King_Scorpion', 'Kingly_Deer', 'Lady_Bug', 'Leafscuttler', 'Magic_Carpet', 'Magma_Crawler', 'Manta_Ray', 'Midnight_Panther', 'Mouldpincer', 'Nethersteed', 'Night_Wacoon', 'Nightdweller', 'Nightstinger', 'Noble_Lion', 'Noctungra‎', 'Platesaurian', 'Plumfish', 'Poisonbane', 'Racing_Bird', 'Rapid_Boar', 'Razorcreep', 'Rented_Horse_(A)', 'Rented_Horse_(B)', 'Rented_Horse_(C)', 'Rift_Runner', 'Ringtail_Wacoon', 'Sea_Devil', 'Shadow_Draptor', 'Shadow_Hart', 'Shock_Head', 'Siegebreaker', 'Silverneck', 'Slagsnare', 'Stampor', 'Steel_Bee', 'Steelbeak', 'Tamed_Panda', 'Tempest', 'Tiger_Slug', 'Tin_Lizzard', 'Titanica', 'Tombstinger', 'Tundra_Rambler', 'Undead_Cavebear', 'Uniwheel', 'Ursagrodon', 'Venompaw', 'Walker', 'War_Bear', 'War_Horse', 'Water_Buffalo', 'Widow_Queen', 'Winter_King', 'Woodland_Prince'];

// Lista de Outfits Comuns
outfits_comuns = [['Desconhecido', 'Unknown', 'Desconocido', 'Nieznany'], 'Afflicted', 'Assassin', 'Barbarian', 'Beastmaster', 'Beggar', 'Brotherhood', 'Cave_Explorer', 'Ceremonial_Garb', 'Champion', 'Chaos_Acolyte', 'Citizen', 'Conjurer', 'Crystal_Warlord', 'Death_Herald', 'Deepling', 'Demon', 'Demon_Hunter', 'Dream_Warden', 'Druid', 'Elementalist', 'Entrepreneur', 'Evoker', 'Glooth_Engineer', 'Hunter', 'Insectoid', 'Jersey', 'Jester', 'Knight', 'Mage', 'Newly_Wed', 'Nightmare', 'Nobleman', 'Norseman', 'Oriental', 'Pirate', 'Puppeteer', 'Ranger', 'Recruiter', 'Rift_Warrior', 'Royal_Pumpkin', 'Sea_Dog', 'Seaweaver', 'Shaman', 'Soil_Guardian', 'Spirit_Caller', 'Summoner', 'Warmaster', 'Warrior', 'Wayfarer', 'Winter_Warden', 'Wizard', 'Yalaharian'];

// Lista de Outfits Incomuns
outfits_outros = ['Archdemon', 'Barb_Headsplitter', 'Barb_Skullhunter', 'Barb_Bloodwalker', 'Barb_Brutetamer', 'CM', 'Corym_Charlatan', 'Corym_Skirmisher', 'Corym_Vanguard', 'Cultist', 'Demon_Hellfire', 'Demon_Ram', 'Dwarf', 'Elf', 'Frog', 'Gnome'];
outfits = outfits_comuns.concat(outfits_outros);

// Outfits com 8 quadros de animação (PARADO)
OutQuadrosParado = {
  Chaos_Acolyte: 8,
  Evoker: 8
}

// Outfits com 2 quadros de animação (ANDANDO)
OutQuadrosAndando = {
  Barb_Skullhunter: 2,
  Barb_Bloodwalker: 2,
  Barb_Brutetamer: 2,
  CM: 2,
  Corym_Vanguard: 2,
  Cultist: 2,
  Gnome: 2
}

// Montarias com vários quadros de animação (PARADO)
MountQuadrosParado = {
  Batcat: 8,
  Cinderhoof: 8,
  Copper_Fly: 10,
  Coralripper: 8,
  Flamesteed: 8,
  Flitterkatzen: 8,
  Floating_Kashmir: 8,
  Flying_Divan: 8,
  Frostflare: 8,
  Glooth_Glider: 10,
  Golden_Dragonfly: 10,
  Magic_Carpet: 8,
  Nethersteed: 8,
  Nightdweller: 8,
  Plumfish: 8,
  Sea_Devil: 8,
  Steel_Bee: 10,
  Tempest: 8,
  Venompaw: 8
}

// Outfits sem gênero
semGenero = new Array(
  "Archdemon",
  "Barb_Headsplitter",
  "Barb_Skullhunter",
  "Barb_Bloodwalker",
  "Barb_Brutetamer",
  "CM",
  "Corym_Charlatan",
  "Corym_Skirmisher",
  "Corym_Vanguard",
  "Cultist",
  "Demon_Hellfire",
  "Demon_Ram",
  "Dwarf",
  "Elf",
  "Frog"
);

// Outfits sem Addons
OutSemAddon = new Array(
  "Jersey",
  "Newly_Wed",
  "Archdemon",
  "Barb_Headsplitter",
  "Barb_Skullhunter",
  "Barb_Bloodwalker",
  "Barb_Brutetamer",
  "CM",
  "Corym_Charlatan",
  "Corym_Skirmisher",
  "Corym_Vanguard",
  "Cultist",
  "Dwarf",
  "Elf",
  "Frog",
  "Gnome"
);

// Outfits com Addons excludentes
OutAddonExcludente = new Array(
  "Yalaharian"
);

quadrado_cor = $('.tabela_cores').children('tbody').children('tr').children('td');
cor = new Array([255, 255, 255], [255, 212, 191], [255, 233, 191], [255, 255, 191], [233, 255, 191], [212, 255, 191], [191, 255, 191], [191, 255, 212], [191, 255, 233], [191, 255, 255], [191, 233, 255], [191, 212, 255], [191, 191, 255], [212, 191, 255], [233, 191, 255], [255, 191, 255], [255, 191, 233], [255, 191, 212], [255, 191, 191], [218, 218, 218], [191, 159, 143], [191, 175, 143], [191, 191, 143], [175, 191, 143], [159, 191, 143], [143, 191, 143], [143, 191, 159], [143, 191, 175], [143, 191, 191], [143, 175, 191], [143, 159, 191], [143, 143, 191], [159, 143, 191], [175, 143, 191], [191, 143, 191], [191, 143, 175], [191, 143, 159], [191, 143, 143], [182, 182, 181], [191, 127, 95], [191, 159, 95], [191, 191, 95], [159, 191, 95], [127, 191, 95], [95, 191, 95], [95, 191, 127], [95, 191, 159], [95, 191, 191], [95, 159, 191], [95, 127, 191], [95, 95, 191], [127, 95, 191], [159, 95, 191], [191, 95, 191], [191, 95, 159], [191, 95, 127], [191, 95, 95], [145, 145, 144], [191, 106, 63], [191, 148, 63], [191, 191, 63], [148, 191, 63], [106, 191, 63], [63, 191, 63], [63, 191, 106], [63, 191, 148], [63, 191, 191], [63, 148, 191], [63, 106, 191], [63, 63, 191], [106, 63, 191], [148, 63, 191], [191, 63, 191], [191, 63, 148], [191, 63, 106], [191, 63, 63], [109, 109, 109], [255, 85, 0], [255, 170, 0], [255, 255, 0], [170, 255, 0], [84, 255, 0], [0, 255, 0], [0, 255, 84], [0, 255, 170], [0, 255, 255], [0, 169, 255], [0, 85, 255], [0, 0, 255], [85, 0, 255], [169, 0, 255], [254, 0, 255], [255, 0, 170], [255, 0, 85], [255, 0, 0], [72, 72, 68], [191, 63, 0], [191, 127, 0], [191, 191, 0], [127, 191, 0], [63, 191, 0], [0, 191, 0], [0, 191, 63], [0, 191, 127], [0, 191, 191], [0, 127, 191], [0, 63, 191], [0, 0, 191], [63, 0, 191], [127, 0, 191], [191, 0, 191], [191, 0, 127], [191, 0, 63], [191, 0, 0], [36, 36, 36], [127, 42, 0], [127, 85, 0], [127, 127, 0], [85, 127, 0], [42, 127, 0], [0, 127, 0], [0, 127, 42], [0, 127, 85], [0, 127, 127], [0, 84, 127], [0, 42, 127], [0, 0, 127], [42, 0, 127], [84, 0, 127], [127, 0, 127], [127, 0, 85], [127, 0, 42], [127, 0, 0]);

opc = {
  lingua: "br",
  outfit: outfits.indexOf('Citizen'),
  montaria: 0,
  sexo: 'Male',
  lado: 2,
  addon1: false,
  addon2: false,
  h: 78,
  p: 69,
  s: 58,
  d: 76,
  aa: false,
  animar: false,
  quadros: false,
  hp: false,
  nome: '',
  num_q: 1,
  num_qa: 8
}

/* Funções */

function preload() {
  setTimeout(function() {
    for (o = 0; o < outfits.length; o++) {
      if (semGenero.indexOf(outfits[o]) == -1) {
        $('#preload').append('<link href="/wiki/Especial:Filepath/Arquivo:Outfiter_'+outfits[o]+'_Male.png">');
        $('#preload').append('<link href="/wiki/Especial:Filepath/Arquivo:Outfiter_'+outfits[o]+'_Female.png">');
      } else {
        $('#preload').append('<link href="/wiki/Especial:Filepath/Arquivo:Outfiter_'+outfits[o]+'.png">');
      }
    }
    for (m = 0; m < montarias.length; m++) {
      $('#preload').append('<link href="/wiki/Especial:Filepath/Arquivo:Outfiter_Montaria_'+montarias[m]+'.png">');
    }
  }, 1500);
}

function atualizar() {
  clearInterval(loop);
  $('.carregando').show();
  ctx.clearRect(0, 0, 128, 128);
  excecoes();
  imprimirNome();
  buscarArquivo();
  if (opc.montaria === 0) {
    img_out.onload = function(){
      $('.carregando').hide();
      montar();
      ampliar();
      i = largura();
      imprimir();
      quadros();
    }
  } else {
    var load = 0;
    img_out.onload = function(){
      load++;
      if (load == 2) {
        $('.carregando').hide();
        montar();
        ampliar();
        i = largura();
        imprimir();
        quadros();
      }
    }
    img_mount.onload = function(){
      load++;
      if (load == 2) {
        $('.carregando').hide();
        montar();
        ampliar();
        i = largura();
        imprimir();
        quadros();
      }
    }
  }
  gerarlink();
}

function excecoes() {
  if ($.isArray(outfits[opc.outfit])) {
    if (OutSemAddon.indexOf(outfits[opc.outfit][0]) != -1) {
      opc.addon1 = false;
      opc.addon2 = false;
      $("#addon_1").prop("disabled", true);
      $("#addon_2").prop("disabled", true);
      $("#addon_1").attr("checked", false);
      $("#addon_2").attr("checked", false);
      var addons = false;
    } else if (!addons) {
      $("#addon_1").prop("disabled", false);
      $("#addon_2").prop("disabled", false);
      var addons = true;
    }
    if (OutAddonExcludente.indexOf(outfits[opc.outfit][0]) != -1) {
      if (opc.addon1) {
        opc.addon2 = false;
        $("#addon_2").attr("checked", false);
      }
    }
  } else {
    if (OutSemAddon.indexOf(outfits[opc.outfit]) != -1) {
      opc.addon1 = false;
      opc.addon2 = false;
      $("#addon_1").prop("disabled", true);
      $("#addon_2").prop("disabled", true);
      $("#addon_1").attr("checked", false);
      $("#addon_2").attr("checked", false);
      var addons = false;
    } else if (!addons) {
      $("#addon_1").prop("disabled", false);
      $("#addon_2").prop("disabled", false);
      var addons = true;
    }
    if (OutAddonExcludente.indexOf(outfits[opc.outfit]) != -1) {
      if (opc.addon1) {
        opc.addon2 = false;
        $("#addon_2").attr("checked", false);
      }
    }
  }
  
}

function imprimirNome() {
  if ($.isArray(outfits[opc.outfit])) {
    $('.outfit_nome').text(outfits[opc.outfit][lingua].replace(/_/g," "));
  } else {
    $('.outfit_nome').text(outfits[opc.outfit].replace(/_/g," "));
  }
  if (opc.sexo == "Female") {
    var substF = {
      Nobleman: "Noblewoman",
      Norseman: "Norsewoman"
    }
  $('.outfit_nome').text($('.outfit_nome').text().replace(/Nobleman|Norseman/g, function(matched){return substF[matched];
}));
  }
  if (opc.outfit >= outfits_comuns.length) {
    opc.montaria = 0;
    $('input[value='+montarias[opc.montaria][0]+']').prop('checked', true);
  }
  var substMount = {
    Nenhuma: "Montaria",
    None: "Mount",
    Ninguna: "Montura",
    Brak: "Wierzchowiec",
    Armoured_War_Horse: "A. War Horse",
    Glacier_Vagabond: "G. Vagabond",
    Golden_Dragonfly: "G. Dragonfly",
    Undead_Cavebear: "U. Cavebear",
    "(": "",
    ")": "",
    _: " "
  }
  if ($.isArray(montarias[opc.montaria])) {
    $('.montaria_nome').text(montarias[opc.montaria][lingua].replace(/Nenhuma|None|Ninguna|Brak|Armoured_War_Horse|Glacier_Vagabond|Golden_Dragonfly|Undead_Cavebear|_|\(|\)/g, function(matched){return substMount[matched];
}));
  } else {
    $('.montaria_nome').text(montarias[opc.montaria].replace(/Nenhuma|None|Ninguna|Brak|Armoured_War_Horse|Glacier_Vagabond|Golden_Dragonfly|Undead_Cavebear|_|\(|\)/g, function(matched){return substMount[matched];
}));
  }
}

function buscarArquivo(){
  if (opc.montaria !== 0) {
    img_mount = $(document.createElement('img'));
    if ($.isArray(montarias[opc.montaria])) {
      img_mount.attr('src', '/wiki/Especial:Filepath/Arquivo:Outfiter_Montaria_'+montarias[opc.montaria][0]+'.png');
    } else {
      img_mount.attr('src', '/wiki/Especial:Filepath/Arquivo:Outfiter_Montaria_'+montarias[opc.montaria]+'.png');
    }
    img_mount = img_mount[0];
  }
  if ($.isArray(outfits[opc.outfit])) {
    if (semGenero.indexOf(outfits[opc.outfit][0]) != -1) {
      opc.sexo = "Nenhum";
    } else if (opc.sexo == "Nenhum") {
      opc.sexo = "Male";
    }
  } else {
    if (semGenero.indexOf(outfits[opc.outfit]) != -1) {
      opc.sexo = "Nenhum";
    } else if (opc.sexo == "Nenhum") {
      opc.sexo = "Male";
    }
  }
  
  img_out = $(document.createElement('img'));
  if (opc.sexo == "Nenhum") {
    if ($.isArray(outfits[opc.outfit])) {
      img_out.attr('src', '/wiki/Especial:Filepath/Arquivo:Outfiter_'+outfits[opc.outfit][0]+'.png');
    } else {
      img_out.attr('src', '/wiki/Especial:Filepath/Arquivo:Outfiter_'+outfits[opc.outfit]+'.png');
    }
    $('.botao_sexo').hide();
  } else {
    if ($.isArray(outfits[opc.outfit])) {
      img_out.attr('src', '/wiki/Especial:Filepath/Arquivo:Outfiter_'+outfits[opc.outfit][0]+'_'+opc.sexo+'.png');
    } else {
      img_out.attr('src', '/wiki/Especial:Filepath/Arquivo:Outfiter_'+outfits[opc.outfit]+'_'+opc.sexo+'.png');
    }
    $('.botao_sexo').show();
  }
  img_out = img_out[0];
}

function mmc(num1, num2) {
  var a = num1;
  var b = num2;
  do {
    var resto = a % b;
    a = b;
    b = resto;
  } while (resto !== 0);
  return (num1 * num2) / a;
}

function montar() {
  mctx.clearRect(0, 0, 2560, 128);
  if ($.isArray(outfits[opc.outfit])) {
    var out_nome = outfits[opc.outfit][0];
  } else {
    var out_nome = outfits[opc.outfit];
  }
  if ($.isArray(montarias[opc.montaria])) {
    var mount_nome = montarias[opc.montaria][0];
  } else {
    var mount_nome = montarias[opc.montaria];
  }
  if (OutQuadrosParado[out_nome] == undefined) {
    out_parado = 1;
  } else {
    out_parado = OutQuadrosParado[out_nome];
  }
  if (OutQuadrosAndando[out_nome] == undefined) {
    out_andando = 8;
  } else {
    out_andando = OutQuadrosAndando[out_nome];
  }
  if (MountQuadrosParado[mount_nome] == undefined) {
    mount_parado = 1;
  } else {
    mount_parado = MountQuadrosParado[mount_nome];
  }
  parado = mmc(out_parado, mount_parado);
  if (opc.outfit < outfits_comuns.length){
    if (OutSemAddon.indexOf(outfits[opc.outfit]) == -1) {
      var add = 6;
    } else {
      var add = 2;
    }
  } else {
    if (OutSemAddon.indexOf(outfits[opc.outfit]) == -1) {
      var add = 3;
    } else {
      var add = 1;
    }
  }
  var yo = - add;
  var ym = 0;
  if (opc.montaria !== 0) {
    if (OutSemAddon.indexOf(outfits[opc.outfit]) == -1) {
      yo += 3;
    } else {
      yo++;
    }
  }
  for (j = 0; j < parado; j++) {
    if (opc.montaria !== 0) {
      if (j < mount_parado) {
        mctx.drawImage(img_mount, opc.lado*64, 64*ym, 64, 64, 64*j, 0, 64, 64);
        ym++;
      } else {
        ym = j % mount_parado;
        mctx.drawImage(img_mount, opc.lado*64, 64*ym, 64, 64, 64*j, 0, 64, 64);
      }
    }
    if (j < out_parado) {
      yo += add;
      mctx.drawImage(img_out, opc.lado*128, 64*yo, 64, 64, 64*j, 0, 64, 64);
      cctx.globalCompositeOperation = 'copy';
      cctx.drawImage(img_out, opc.lado*128+64, 64*yo, 64, 64, 0, 0, 64, 64);
      colorir(0);
      if (opc.addon1) {
        addon(opc.lado, 1, 0, yo, 0, j);
      }
      if (opc.addon2) {
        addon(opc.lado, 2, 0, yo, 0, j);
      }
    } else {
      if (j % out_parado === 0) {
        yo -= add * out_parado;
      }
      yo += add;
      mctx.drawImage(img_out, opc.lado*128, 64*yo, 64, 64, 64*j, 0, 64, 64);
      cctx.globalCompositeOperation = 'copy';
      cctx.drawImage(img_out, opc.lado*128+64, 64*yo, 64, 64, 0, 0, 64, 64);
      colorir(0);
      if (opc.addon1) {
        addon(opc.lado, 1, 0, yo, 0, j);
      }
      if (opc.addon2) {
        addon(opc.lado, 2, 0, yo, 0, j);
      }
    }
  }
  for (j = 0; j < out_andando; j++) {
    if (opc.montaria !== 0) {
      mctx.drawImage(img_mount, opc.lado*64, 64*ym, 64, 64, 64*j, 64, 64, 64);
      ym++;
    }
    yo += add;
    mctx.drawImage(img_out, opc.lado*128, 64*yo, 64, 64, 64*j, 64, 64, 64);
    cctx.globalCompositeOperation = 'copy';
    cctx.drawImage(img_out, opc.lado*128+64, 64*yo, 64, 64, 0, 0, 64, 64);
    colorir(1);
    if (opc.addon1) {
      addon(opc.lado, 1, 0, yo, 1, j);
    }
    if (opc.addon2) {
      addon(opc.lado, 2, 0, yo, 1, j);
    }
  }
}

function colorir(m) {
  var i;
  var imgData = mctx.getImageData(64*j, 64*m, 64, 64);
  var corData = cctx.getImageData(0, 0, 64, 64);
  for (i = 0; i < corData.data.length; i += 4) {
    var r = corData.data[i];
    var g = corData.data[i+1];
    var b = corData.data[i+2];
    if ((r >= 240) && (g >= 240) && (b <= 15)){
      corData.data[i] = cor[opc.h][0];
      corData.data[i+1] = cor[opc.h][1];
      corData.data[i+2] = cor[opc.h][2];
    } else if ((r >= 240) && (g <= 15) && (b <= 15)){
      corData.data[i] = cor[opc.p][0];
      corData.data[i+1] = cor[opc.p][1];
      corData.data[i+2] = cor[opc.p][2];
    } else if ((r <= 15) && (g >= 240) && (b <= 15)){
      corData.data[i] = cor[opc.s][0];
      corData.data[i+1] = cor[opc.s][1];
      corData.data[i+2] = cor[opc.s][2];
    } else if ((r <= 15) && (g <= 15) && (b >= 240)){
      corData.data[i] = cor[opc.d][0];
      corData.data[i+1] = cor[opc.d][1];
      corData.data[i+2] = cor[opc.d][2];
    }
  }
  cctx.putImageData(corData, 0, 0);
    corData = cctx.getImageData(0, 0, ccor.width, ccor.height);
    for (i = 0; i < imgData.data.length; i+= 4) {
      if (corData.data[i+3] !== 0) {
        imgData.data[i] = imgData.data[i]*corData.data[i] / 255;
        imgData.data[i+1] = imgData.data[i+1]*corData.data[i+1] / 255;
        imgData.data[i+2] = imgData.data[i+2]*corData.data[i+2] / 255;
      }
    }
  mctx.putImageData(imgData, 64*j, 64*m, 0, 0, 64, 64);
}

function addon(lado, n, x, y, i, j) {
  mctx.globalCompositeOperation = 'source-over';
  mctx.drawImage(img_out, lado*128, 64*y + 64*n, 64, 64, 64*j, 64*i, 64, 64);
  cctx.drawImage(img_out, lado*128+64, 64*y + 64*n, 64, 64, 0, 0, 64, 64);
  colorir(i);
}

function imprimir() {
  clearInterval(loop);
  ctx.globalCompositeOperation = 'destination-over';
  x_animar = 1;
  ctx.imageSmoothingEnabled = opc.aa;
  ctx.mozImageSmoothingEnabled = opc.aa;
  ctx.oImageSmoothingEnabled = opc.aa;
  ctx.webkitImageSmoothingEnabled = opc.aa;
  ctx.scale(2, 2);
  if (opc.animar) {
    if (out_andando == 8) {
      loop = setInterval(function(){animar(true)}, 100);
    } else if (out_andando == 2) {
      loop = setInterval(function(){animar(true)}, 500);
    }
  } else {
    if (parado == 1) {
      ctx.globalCompositeOperation = 'copy';
      ctx.drawImage(cm, 0, 0, 64, 64, 0.5*i, 0, 64, 64);
      desenharnomehp();
    } else {
      loop = setInterval(function(){animar(false)}, 100);
    }
  }
}

function animar(estado) {
  ctx.clearRect(0, 0, 128, 128);
  if (estado) {
    if (x_animar < out_andando - 1) {
      x_animar += 1;
    } else {
      x_animar = 0;
    }
    ctx.drawImage(cm, 64*x_animar, 64, 64, 64, 0.5*i, 0, 64, 64);
  } else {
    if (x_animar < parado - 1) {
      x_animar += 1;
    } else {
      x_animar = 0;
    }
    ctx.drawImage(cm, 64*x_animar, 0, 64, 64, 0.5*i, 0, 64, 64);
  }
  desenharnomehp();
}

function ampliar() {
  ctx.imageSmoothingEnabled = $('#suavizar').attr("checked");
}

function largura() {
  var x_inicial = 0;
  if (opc.nome != char_name && opc.nome != "") {
    var nome = opc.nome.split("");
    var w = 0;
    var x_final = 0;
    var inicio = 0;
    for (x = 0; x < nome.length; x++) {
      if (letras[nome[x]] != undefined) {
        x_final += letras[nome[x]][2] - 1;
      } else {
        x_final += 3;
      }
    }
    var largura_texto = x_final;
    var x_inicial = 94 - Math.floor((largura_texto+1)/2);
    if (x_inicial < 0) {
      w += Math.abs(x_inicial);
    } else {
      var x_inicial = 0;
    }
    var x_final = 95 - Math.floor((largura_texto+1)/2) + largura_texto;
    w += x_final;
    if (opc.montaria !== 0) {
      w++;
    }
    if (x_final > 128) {
      $('#tela').attr("width", w);
    } else {
      $('#tela').attr("width", 128);
    }
  } else {
    $('#tela').attr("width", 128);
  }
  return Math.abs(x_inicial);
}

function desenharnomehp() {
  ctx.globalCompositeOperation = 'source-over';
  ctx.scale(0.5, 0.5);
  var j = 61;
  if (opc.montaria !== 0) {
    i += 1;
    j += 1;
  }
  if (opc.hp) {
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle="#000000";
    ctx.fillRect(i+80,j,27,4);
    ctx.fillStyle="#00B800";
    ctx.fillRect(i+81,j+1,25,2);
  }
  if (opc.nome != char_name && opc.nome != "") {
    var nome = opc.nome.split("");
    var w = 0;
    var inicio = 0;
    for (x = 0; x < nome.length; x++) {
      if (letras[nome[x]] != undefined) {
        w += letras[nome[x]][2] - 1;
      } else {
        w += 3;
      }
    }
    var w = 94 - Math.floor((w+1)/2) + i;
    for (x = 0; x < nome.length; x++) {
      if (letras[nome[x]] != undefined) {
        ctx.drawImage(img_letras, 16*letras[nome[x]][0], 16*letras[nome[x]][1], letras[nome[x]][2], 12, w, j-12, letras[nome[x]][2], 12);
        w += letras[nome[x]][2] - 1;
      } else {
        w += 3;
      }
    }
  }
  if (opc.montaria !== 0) {
    i--;
  }
  ctx.scale(2, 2);
}

function quadros() {
  if (opc.quadros) {
    $('.quadros').show();
    $('.quadro').hide();
    $('.quadro').parent().hide();
    if (opc.animar) {
      for (c = 0; c < out_andando; c++) {
        $('#q'+c).parent().show();
        $('#q'+c).show();
        var quadro = $('#q'+c)[0];
        var qtx =  quadro.getContext("2d");
        larguraquadros(c);
        qtx.clearRect(0, 0, quadro.width, quadro.height);
        $('#q'+c)[0].getContext("2d").drawImage(cm, 64*c, 64, 64, 64, qi, 0, 64, 64);
        nomehpquadros(qtx);
      }
    } else {
      for (c = 0; c < parado; c++) {
        $('#q'+c).parent().show();
        $('#q'+c).show();
        var quadro = $('#q'+c)[0];
        var qtx =  quadro.getContext("2d");
        larguraquadros(c);
        qtx.clearRect(0, 0, quadro.width, quadro.height);
        $('#q'+c)[0].getContext("2d").drawImage(cm, 64*c, 0, 64, 64, qi, 0, 64, 64);
        nomehpquadros(qtx);
      }
    }
  } else {
    $('.quadros').hide();
  }
}

function larguraquadros(q) {
  qi = 0;
  var x_inicial = 0;
  if (opc.nome != char_name && opc.nome != "") {
    var nome = opc.nome.split("");
    var w = 0;
    var x_final = 0;
    var inicio = 0;
    for (x = 0; x < nome.length; x++) {
      if (letras[nome[x]] != undefined) {
        x_final += letras[nome[x]][2] - 1;
      } else {
        x_final += 3;
      }
    }
    var largura_texto = x_final;
    var x_inicial = 49 - Math.floor((largura_texto+1)/2);
    if (x_inicial < 0) {
      w += Math.abs(x_inicial);
    } else {
      var x_inicial = 0;
    }
    var x_final = 50 - Math.floor((largura_texto+1)/2) + largura_texto;
    w += x_final;
    if (x_final > 64) {
      $('#q' + q).attr("width", w);
    } else {
      $('#q' + q).attr("width", 64);
    }
  } else {
    $('#q' + q).attr("width", 64);
  }
  qi = Math.abs(x_inicial);
  if (opc.montaria !== 0) {
    qi++;
  }
}

function nomehpquadros(qtx) {
  var qj = 29;
  if (opc.montaria !== 0) {
    qi --;
    qj --;
  }
  if (opc.hp) {
    qtx.fillStyle="#000000";
    qtx.fillRect(qi+35,qj,27,4);
    qtx.fillStyle="#00B800";
    qtx.fillRect(qi+36,qj+1,25,2);
  }
  if (opc.nome != char_name && opc.nome != "") {
    var nome = opc.nome.split("");
    var w = 0;
    var inicio = 0;
    for (x = 0; x < nome.length; x++) {
      if (letras[nome[x]] != undefined) {
        w += letras[nome[x]][2] - 1;
      } else {
        w += 3;
      }
    }
    w = 49 - Math.floor((w+1)/2) + qi;
    for (x = 0; x < nome.length; x++) {
      if (letras[nome[x]] != undefined) {
        qtx.drawImage(img_letras, 16*letras[nome[x]][0], 16*letras[nome[x]][1], letras[nome[x]][2], 12, w, qj-12, letras[nome[x]][2], 12);
        w += letras[nome[x]][2] - 1;
      } else {
        w += 3;
      }
    }
  }
}

function gerarlink() {
  var link = $('.link');
  link.val('http://tibiawiki.com.br/wiki/Outfiter?');
  if (opc.lingua != "br") {
    link.val(link.val() + opc.lingua + "&");
  }
  if (opc.outfit != outfits.indexOf('Citizen')) {
    link.val(link.val() + "o=" + opc.outfit + "&");
  }
  if (opc.montaria !== 0) {
    link.val(link.val() + "m=" + opc.montaria + "&");
  }
  if (opc.lado != 2) {
    link.val(link.val() + "l=" + opc.lado + "&");
  }
  if (opc.sexo == "Female") {
    link.val(link.val() + "f&");
  }
  if (opc.addon1) {
    link.val(link.val() + "1&");
  }
  if (opc.addon2) {
    link.val(link.val() + "2&");
  }
  if (opc.h != 78) {
    link.val(link.val() + "h=" + opc.h + "&");
  }
  if (opc.p != 69) {
    link.val(link.val() + "p=" + opc.p + "&");
  }
  if (opc.s != 58) {
    link.val(link.val() + "s=" + opc.s + "&");
  }
  if (opc.d != 76) {
    link.val(link.val() + "d=" + opc.d + "&");
  }
  if (opc.animar) {
    link.val(link.val() + "an&");
  }
  if (opc.quadros) {
    link.val(link.val() + "q&");
  }
  if (opc.aa) {
    link.val(link.val() + "aa&");
  }
  if (opc.hp) {
    link.val(link.val() + "hp&");
  }
  if (opc.nome != char_name && opc.nome != "") {
    link.val(link.val() + "n=" + opc.nome.replace(" ", "_") + "&");
  }
  link.val(link.val().substring(0, link.val().length - 1));
}

function parametro(param) {
  var URL = window.location.href.split('?')[1];
  if (URL != undefined) {
    var variaveisURL = URL.split('&');
    for (var i = 0; i < variaveisURL.length; i++) {
      var parametro = variaveisURL[i].split('=');
      if (parametro[0] == param) {
        if (parametro[1] != undefined) {
          return parametro[1];
        } else {
          return true;
        }
      }
    }
  } else {
    return undefined;
  }
}

function obterParametros () {
  if (parametro('en')) {
    opc.lingua = "en";
  } else if (parametro('es')) {
    opc.lingua = "es";
  } else if (parametro('pl')) {
    opc.lingua = "pl";
  }
  if (parametro('o') != undefined) {
    opc.outfit = parametro('o');
  }
  if (parametro('m') != undefined) {
    opc.montaria = parametro('m');
  }
  if (parametro('f')) {
    opc.sexo = "Female";
    $("#sexo").toggleClass("sexo_m");
    $("#sexo").toggleClass("sexo_f");
  }
  if (parametro('1')) {
    opc.addon1 = true;
  }
  if (parametro('2')) {
    opc.addon2 = true;
  }
  if (opc.addon1) {
    $("#addon_1").attr('checked', true);
  }
  if (opc.addon2) {
    $("#addon_2").attr('checked', true);
  }
  if (parametro('l') != undefined) {
    opc.lado = parametro('l');
  }
  if (parametro('h') != undefined) {
    opc.h = parametro('h');
  }
  if (parametro('p') != undefined) {
    opc.p = parametro('p');
  }
  if (parametro('s') != undefined) {
    opc.s = parametro('s');
  }
  if (parametro('d') != undefined) {
    opc.d = parametro('d');
  }
  if (parametro('aa')) {
    $("#suavizar").attr('checked', true);
    opc.aa = true;
  }
  if (parametro('an')) {
    $("#animar").attr('checked', true);
    opc.animar = true;
  }
  if (parametro('q')) {
    $("#quadros").attr('checked', true);
    opc.quadros = true;
  }
  if (parametro('hp')) {
    $('#vida').attr("checked", true);
    opc.hp = true;
  }
  if (parametro('n') != undefined) {
    opc.nome = parametro('n').replace("_", " ");
    $('.nome_char').val(parametro('n').replace("_", " "));
  }
}

function janelas() {
  $('#form_outfits').empty();
  var dif = true;
  for (x = 0; x < outfits.length; x++) {
    if ($.isArray(outfits[x])) {
      if (dif) {
        $('#form_outfits').append('<div class="janela_opcao_out_dif"><input id="'+ outfits[x][0] +'" type="radio" name="outfit" value="'+ outfits[x][0] +'"><label for="'+ outfits[x][0] +'">' + outfits[x][lingua].replace(/_/g, " ") + '</label></div>');
      } else {
        $('#form_outfits').append('<div class="janela_opcao_out"><input id="'+ outfits[x][0] +'" type="radio" name="outfit" value="'+ outfits[x][0] +'"><label for="'+ outfits[x][0] +'">' + outfits[x][lingua].replace(/_/g, " ") + '</label></div>');
      }
    } else {
      if (dif) {
        $('#form_outfits').append('<div class="janela_opcao_out_dif"><input id="'+ outfits[x] +'" type="radio" name="outfit" value="'+ outfits[x] +'"><label for="'+ outfits[x] +'">' + outfits[x].replace(/_/g, " ") + '</label></div>');
      } else {
        $('#form_outfits').append('<div class="janela_opcao_out"><input id="'+ outfits[x] +'" type="radio" name="outfit" value="'+ outfits[x] +'"><label for="'+ outfits[x] +'">' + outfits[x].replace(/_/g, " ") + '</label></div>');
      }
    }
    dif = !dif;
  }
  $('#form_montarias').empty();
  dif = true;
  for (x = 0; x < montarias.length; x++) {
    if ($.isArray(montarias[x])) {
      if (dif) {
        $('#form_montarias').append('<div class="janela_opcao_mount_dif"><input id="'+ montarias[x][0] +'" type="radio" name="montaria" value="'+ montarias[x][0] +'"><label for="' + montarias[x][0] +'">' + montarias[x][lingua].replace(/_/g, " ") +'</label></div>');
      } else {
        $('#form_montarias').append('<div class="janela_opcao_mount"><input id="'+ montarias[x][0] +'" type="radio" name="montaria" value="'+ montarias[x][0] +'"><label for="' + montarias[x][0] +'">' + montarias[x][lingua].replace(/_/g, " ") +'</label></div>');
      }
    } else {
      if (dif) {
        $('#form_montarias').append('<div class="janela_opcao_mount_dif"><input id="'+ montarias[x] +'" type="radio" name="montaria" value="'+ montarias[x] +'"><label for="' + montarias[x] +'">' + montarias[x].replace(/_/g, " ") +'</label></div>');
      } else {
        $('#form_montarias').append('<div class="janela_opcao_mount"><input id="'+ montarias[x] +'" type="radio" name="montaria" value="'+ montarias[x] +'"><label for="' + montarias[x] +'">' + montarias[x].replace(/_/g, " ") +'</label></div>');
      }
    }
    dif = !dif;
  }
  if ($.isArray(outfits[opc.outfit])) {
    $('input#'+outfits[opc.outfit][0]).prop("checked", true);
  } else {
    $('input#'+outfits[opc.outfit]).prop("checked", true);
  }
  if ($.isArray(montarias[opc.montaria])) {
    $('input#'+montarias[opc.montaria][0]).attr("checked", true);
  } else {
    $('input#'+montarias[opc.montaria]).attr("checked", true); 
  }
}

function ie() {
  if (/MSIE/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/12/i.test(navigator.userAgent)) {
    opc.aa = true;
    $("#suavizar").attr("checked", true); 
    $("#suavizar").prop("disabled", true);
  }
}

/* Eventos */

$(document).ready(function(){
  $('#carregando_outfiter').hide();
  tabela_cor();
  $("#head").addClass('selecionado');
  $('#'+opc.h).addClass('cor_selecionada');
  artworks();
  obterParametros();
  idioma(opc.lingua);
  janelas();
  atualizar();
  ie();
  preload();
});

$('#form_outfits').change(function() {
  opc.outfit = outfits.indexOf($('input[name=outfit]:checked').val());
  if (opc.outfit == -1) {
    var x = 0;
    while (x < outfits.length && opc.outfit == -1) {
      if ($('input[name=outfit]:checked').val() == outfits[x][0]) {
        opc.outfit = x;
      }
      x++;
    }
  }
  atualizar();
});

$('#form_montarias').change(function() {
  opc.montaria = montarias.indexOf($('input[name=montaria]:checked').val());
  if (opc.montaria == -1) {
    var x = 0;
    while (x < montarias.length && opc.montaria == -1) {
      if ($('input[name=montaria]:checked').val() == montarias[x][0]) {
        opc.montaria = x;
      }
      x++;
    }
  }
  atualizar();
});

$('#out_e').click(function(){
  if (opc.outfit !== 0) {
    opc.outfit--;
  } else {
    opc.outfit = outfits.length - 1;
  }
  if ($.isArray(outfits[opc.outfit])) {
    $('input[value="'+outfits[opc.outfit][0]+'"]').prop('checked', true);
  } else {
    $('input[value="'+outfits[opc.outfit]+'"]').prop('checked', true);
  }
  atualizar();
});

$('#out_d').click(function(){
  if (opc.outfit != outfits.length - 1) {
    opc.outfit++;
  } else {
    opc.outfit = 0;
  }
  if ($.isArray(outfits[opc.outfit])) {
    $('input[value="'+outfits[opc.outfit][0]+'"]').prop('checked', true);
  } else {
    $('input[value="'+outfits[opc.outfit]+'"]').prop('checked', true);
  }
  atualizar();
});

$('#mount_e').click(function(){
  if (opc.montaria !== 0) {
    opc.montaria--;
  } else {
    opc.montaria = montarias.length - 1;
  }
  if ($.isArray(montarias[opc.montaria])) {
    $('input[value="'+montarias[opc.montaria][0]+'"]').prop('checked', true);
  } else {
    $('input[value="'+montarias[opc.montaria]+'"]').prop('checked', true);
  }
  atualizar();
});

$('#mount_d').click(function(){
  if (opc.montaria != montarias.length - 1) {
    opc.montaria++;
  } else {
    opc.montaria = 0;
  }
  if ($.isArray(montarias[opc.montaria])) {
    $('input[value="'+montarias[opc.montaria][0]+'"]').prop('checked', true);
  } else {
    $('input[value="'+montarias[opc.montaria]+'"]').prop('checked', true);
  }
  atualizar();
});

$(".botao_sexo").click(function(){
  $("#sexo").toggleClass("sexo_m");
  $("#sexo").toggleClass("sexo_f");
  if (opc.sexo == "Male") {
    opc.sexo = "Female";
  } else {
    opc.sexo = "Male";
  }
  atualizar();
});

$('.seta_cima').click(function() {
  opc.lado = 0;
  atualizar();
})

$('.seta_direita').click(function() {
  opc.lado = 1;
  atualizar();
})

$('.seta_baixo').click(function() {
  opc.lado = 2;
  atualizar();
})

$('.seta_esquerda').click(function() {
  opc.lado = 3;
  atualizar();
})

$("#addon_1").click(function() {
  opc.addon1 = !opc.addon1;
  if (OutAddonExcludente.indexOf(outfits[opc.outfit]) != -1) {
    if (opc.addon1) {
      opc.addon2 = false;
      $("#addon_2").attr("checked", false);
    }
  }
  atualizar();
});

$("#addon_2").click(function() {
  opc.addon2 = !opc.addon2;
  if (OutAddonExcludente.indexOf(outfits[opc.outfit]) != -1) {
    if (opc.addon2) {
      opc.addon1 = false;
      $("#addon_1").attr("checked", false);
    }
  }
  atualizar();
});

$('#suavizar').click(function() {
  opc.aa = $('#suavizar').attr("checked");
  atualizar();
});

$('#animar').click(function() {
  opc.animar = $('#animar').attr("checked");
  atualizar();
});

$('#quadros').click(function() {
  opc.quadros = $('#quadros').attr("checked");
  atualizar();
});

$('#vida').click(function() {
  opc.hp = $('#vida').attr("checked");
  atualizar();
});

$('.nome_char').click(function(){
  if ($('.nome_char').val() == char_name) {
    $('.nome_char').val("");
  }
});

$('.nome_char').keyup(function(){
  if ($('.nome_char').val() != char_name) {
    $('.nome_char').css('color', '#B2A898');
  }
  opc.nome = $('.nome_char').val();
  atualizar();
});

$('.nome_char').blur(function(){
  if ($('.nome_char').val() == "" || $('.nome_char').val() == "Nome do Char") {
    $('.nome_char').val(char_name);
    $('.nome_char').css('color', '#6C6A64');
  }
});

/* Seleção de Cores */

function tabela_cor(){
  cont = 0;
  $(quadrado_cor).each(function(){
    $(this).attr('id', cont);
    $(this).css('background', 'rgb('+cor[cont][0]+', '+cor[cont][1]+', '+cor[cont][2]+')');
    cont++;
  });
}

$(quadrado_cor).click(function(){
  $(quadrado_cor).removeClass('cor_selecionada');
  $(this).addClass('cor_selecionada');
  var selecionado = $('.selecionado').attr('id');
  switch(selecionado) {
    case "head":
      opc.h = $(this).attr('id');
      break;
    case "primary":
      opc.p = $(this).attr('id');
      break;
    case "secondary":
      opc.s = $(this).attr('id');
      break;
    case "detail":
      opc.d = $(this).attr('id');
      break;
  }
  atualizar();
});

$("#head").click(function(){
  $(".seletores").removeClass('selecionado');
  $("#head").addClass('selecionado');
  $(quadrado_cor).removeClass('cor_selecionada');
  $('#'+opc.h).addClass('cor_selecionada');
});

$("#primary").click(function(){
  $(".seletores").removeClass('selecionado');
  $("#primary").addClass('selecionado');
  $(quadrado_cor).removeClass('cor_selecionada');
  $('#'+opc.p).addClass('cor_selecionada');
});

$("#secondary").click(function(){
  $(".seletores").removeClass('selecionado');
  $("#secondary").addClass('selecionado');
  $(quadrado_cor).removeClass('cor_selecionada');
  $('#'+opc.s).addClass('cor_selecionada');
});

$("#detail").click(function(){
  $(".seletores").removeClass('selecionado');
  $("#detail").addClass('selecionado');
  $(quadrado_cor).removeClass('cor_selecionada');
  $('#'+opc.d).addClass('cor_selecionada');
});

/* Artworks */

function artworks() {
  var artwork_A = new Array(["BlackStag", 75, 0, 230], ["ConqueringLion", 85, 7, 280], ["Scorpion", 80, 0, 250], ["RiftRunner", 95, 0, 290]);
  var artwork_B = new Array(["ArmoredWarhorse", 70, 0, 240], ["LadyBug", 70, -5, 240], ["Walker", 70, -5, 230]);
  var artwork_C = new Array(["Dragonling", 85, 0, 300], ["Dragonling2", 90, 0, 300], ["Waccoon", 105, -15, 300]);
  var artwork_D = new Array(["BatCat", 105, -20, 300], ["CreepingHand", 80, -5, 250], ["PanzerBird", 72, 0, 230], ["MantaRay", 105, -15, 300]);
  var random = RandomInt(0,3);                                                         
  $('#artwork_e').append('<img class="artwork" id="artwork_A" style="width: '+artwork_A[random][1]+'%; max-width: '+artwork_A[random][3]+'px; top: '+artwork_A[random][2]+'px;" src="/wiki/Especial:Filepath/Arquivo:Outfiter_Artwork_'+artwork_A[random][0]+'.png">');
  random = RandomInt(0,2);
  $('#artwork_d').append('<img class="artwork" id="artwork_B" style="width: '+artwork_B[random][1]+'%; max-width: '+artwork_B[random][3]+'px; top: '+artwork_B[random][2]+'px;" src="/wiki/Especial:Filepath/Arquivo:Outfiter_Artwork_'+artwork_B[random][0]+'.png">');
  random = RandomInt(0,2);
  $('#artwork_e').append('<img class="artwork" id="artwork_C" style="width: '+artwork_C[random][1]+'%; max-width: '+artwork_C[random][3]+'px; right: '+artwork_C[random][2]+'px;" src="/wiki/Especial:Filepath/Arquivo:Outfiter_Artwork_'+artwork_C[random][0]+'.png">');
  random = RandomInt(0,3);
  $('#artwork_d').append('<img class="artwork" id="artwork_D" style="width: '+artwork_D[random][1]+'%; max-width: '+artwork_D[random][3]+'px; left: '+artwork_D[random][2]+'px;" src="/wiki/Especial:Filepath/Arquivo:Outfiter_Artwork_'+artwork_D[random][0]+'.png">');
}

function RandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* Idiomas */

$('.bandeira').click(function(){
  idioma($(this).attr('id'));
  janelas();
  atualizar();
});

function idioma(id) {
  $('.lingua').children().hide();
  $('.'+id).show();
  opc.lingua = id;
  switch (opc.lingua) {
    case "br":
      lingua = 0;
      char_name = "Nome do Char";
      break;
    case "en":
      lingua = 1;
      char_name = "Char Name";
      break;
    case "es":
      lingua = 2;
      char_name = "Nombre del Char";
      break;
    case "pl":
      lingua = 3;
      char_name = "Nazwa Postaci";
      break;
  }
  if (opc.nome == "" || opc.nome == "Nome do Char" || opc.nome == "Char Name" || opc.nome == "Nombre del Char" || opc.nome == "Nazwa Postaci") {
    opc.nome = char_name;
    $('.nome_char').val(char_name);
  }
  if ($('.nome_char').val() == char_name) {
    $('.nome_char').css('color', '#6C6A64');
  }
}