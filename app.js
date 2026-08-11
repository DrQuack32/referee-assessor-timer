(() => {
  const STORAGE_MARKERS = 'footballMatchTimer.markers.v1';
  const STORAGE_LANGUAGE = 'footballMatchTimer.language';

  const strings = {
    en: {appName:'Football Match Timer',wake:'Screen awake',setupTitle:'Match Setup',setupIntro:'Configure the match before starting.',language:'Language',halfLength:'Half length (minutes)',extraTime:'Extra time',enableET:'Enable extra time periods',etLength:'Extra-time half length (minutes)',startPeriod:'Starting period',startTime:'Starting match time (MM:SS)',useSettings:'Use these settings',normalTime:'Normal time',matchTime:'Match time',ready:'Ready',firstHalf:'First half',secondHalf:'Second half',et1:'Extra time — first period',et2:'Extra time — second period',start:'Start',end:'End',tapEnd:'Tap again to END',ended:'ended',matchEnded:'Match ended',suspend:'Suspend match',tapSuspend:'Tap again to SUSPEND',resume:'RESUME MATCH',suspended:'MATCH SUSPENDED — ALL CLOCKS STOPPED',stoppage:'Stoppage / delay time',notAccum:'Not accumulating',accum:'Accumulating stoppage now',startDelay:'START DELAY',stopDelay:'STOP DELAY',markers:'Video Review Markers',mark:'MARK',show:'Show markers',hide:'Hide markers',undo:'Undo last',copy:'Copy markers',clear:'Clear markers',tapClear:'Tap again to clear',none:'No markers recorded',copied:'Markers copied',copyFail:'Copy not supported here',added:'Marker added',removed:'Last marker removed',newSetup:'New match setup',tapNew:'Tap again for new setup',resetPeriod:'Reset current period',tapReset:'Tap again to reset period',hint:'Protected controls require confirmation with a second tap within 3 seconds.',invalid:'Starting time must be in MM:SS format, for example 63:17.',p1:'1st Half',p2:'2nd Half',pet1:'Extra Time — 1st Period',pet2:'Extra Time — 2nd Period'},
    es: {appName:'Temporizador de Partido',wake:'Pantalla activa',setupTitle:'Configuración del partido',setupIntro:'Configura el partido antes de comenzar.',language:'Idioma',halfLength:'Duración de cada parte (minutos)',extraTime:'Prórroga',enableET:'Activar periodos de prórroga',etLength:'Duración de cada parte de la prórroga (minutos)',startPeriod:'Periodo inicial',startTime:'Tiempo inicial del partido (MM:SS)',useSettings:'Usar esta configuración',normalTime:'Tiempo reglamentario',matchTime:'Tiempo de partido',ready:'Preparado',firstHalf:'Primera parte',secondHalf:'Segunda parte',et1:'Prórroga — primera parte',et2:'Prórroga — segunda parte',start:'Iniciar',end:'Finalizar',tapEnd:'Toca de nuevo para FINALIZAR',ended:'finalizada',matchEnded:'Partido finalizado',suspend:'Suspender partido',tapSuspend:'Toca de nuevo para SUSPENDER',resume:'REANUDAR PARTIDO',suspended:'PARTIDO SUSPENDIDO — TODOS LOS RELOJES DETENIDOS',stoppage:'Tiempo de interrupciones',notAccum:'Sin acumular',accum:'Acumulando interrupción',startDelay:'INICIAR INTERRUPCIÓN',stopDelay:'DETENER INTERRUPCIÓN',markers:'Marcadores para revisión',mark:'MARCAR',show:'Mostrar marcadores',hide:'Ocultar marcadores',undo:'Deshacer último',copy:'Copiar marcadores',clear:'Borrar marcadores',tapClear:'Toca de nuevo para borrar',none:'No hay marcadores registrados',copied:'Marcadores copiados',copyFail:'No se puede copiar aquí',added:'Marcador añadido',removed:'Último marcador eliminado',newSetup:'Nueva configuración',tapNew:'Toca de nuevo para nueva configuración',resetPeriod:'Reiniciar periodo actual',tapReset:'Toca de nuevo para reiniciar el periodo',hint:'Los controles protegidos requieren un segundo toque dentro de 3 segundos.',invalid:'El tiempo inicial debe tener formato MM:SS, por ejemplo 63:17.',p1:'1.ª parte',p2:'2.ª parte',pet1:'Prórroga — 1.ª parte',pet2:'Prórroga — 2.ª parte'},
    fr: {appName:'Chronomètre de Match',wake:'Écran actif',setupTitle:'Configuration du match',setupIntro:'Configurez le match avant de commencer.',language:'Langue',halfLength:'Durée d’une mi-temps (minutes)',extraTime:'Prolongation',enableET:'Activer la prolongation',etLength:'Durée d’une période de prolongation (minutes)',startPeriod:'Période de départ',startTime:'Temps de départ du match (MM:SS)',useSettings:'Utiliser ces réglages',normalTime:'Temps réglementaire',matchTime:'Temps de match',ready:'Prêt',firstHalf:'Première mi-temps',secondHalf:'Deuxième mi-temps',et1:'Prolongation — première période',et2:'Prolongation — deuxième période',start:'Démarrer',end:'Terminer',tapEnd:'Touchez encore pour TERMINER',ended:'terminée',matchEnded:'Match terminé',suspend:'Suspendre le match',tapSuspend:'Touchez encore pour SUSPENDRE',resume:'REPRENDRE LE MATCH',suspended:'MATCH SUSPENDU — TOUS LES CHRONOS SONT ARRÊTÉS',stoppage:'Temps d’arrêt / interruption',notAccum:'Pas d’accumulation',accum:'Temps d’arrêt en cours',startDelay:'DÉMARRER ARRÊT',stopDelay:'ARRÊTER',markers:'Repères de révision',mark:'REPÈRE',show:'Afficher les repères',hide:'Masquer les repères',undo:'Annuler le dernier',copy:'Copier les repères',clear:'Effacer les repères',tapClear:'Touchez encore pour effacer',none:'Aucun repère enregistré',copied:'Repères copiés',copyFail:'Copie non disponible ici',added:'Repère ajouté',removed:'Dernier repère supprimé',newSetup:'Nouvelle configuration',tapNew:'Touchez encore pour recommencer',resetPeriod:'Réinitialiser la période',tapReset:'Touchez encore pour réinitialiser',hint:'Les commandes protégées nécessitent un second toucher dans les 3 secondes.',invalid:'Le temps de départ doit être au format MM:SS, par exemple 63:17.',p1:'1re mi-temps',p2:'2e mi-temps',pet1:'Prolongation — 1re période',pet2:'Prolongation — 2e période'},
    pt: {appName:'Cronómetro de Jogo',wake:'Ecrã ativo',setupTitle:'Configuração do jogo',setupIntro:'Configure o jogo antes de começar.',language:'Idioma',halfLength:'Duração de cada parte (minutos)',extraTime:'Prolongamento',enableET:'Ativar períodos de prolongamento',etLength:'Duração de cada parte do prolongamento (minutos)',startPeriod:'Período inicial',startTime:'Tempo inicial do jogo (MM:SS)',useSettings:'Usar estas definições',normalTime:'Tempo regulamentar',matchTime:'Tempo de jogo',ready:'Pronto',firstHalf:'Primeira parte',secondHalf:'Segunda parte',et1:'Prolongamento — primeira parte',et2:'Prolongamento — segunda parte',start:'Iniciar',end:'Terminar',tapEnd:'Toque novamente para TERMINAR',ended:'terminada',matchEnded:'Jogo terminado',suspend:'Suspender jogo',tapSuspend:'Toque novamente para SUSPENDER',resume:'RETOMAR JOGO',suspended:'JOGO SUSPENSO — TODOS OS CRONÓMETROS PARADOS',stoppage:'Tempo de paragem / interrupção',notAccum:'Sem acumulação',accum:'A acumular tempo de paragem',startDelay:'INICIAR PARAGEM',stopDelay:'PARAR',markers:'Marcadores para revisão',mark:'MARCAR',show:'Mostrar marcadores',hide:'Ocultar marcadores',undo:'Desfazer último',copy:'Copiar marcadores',clear:'Limpar marcadores',tapClear:'Toque novamente para limpar',none:'Nenhum marcador registado',copied:'Marcadores copiados',copyFail:'Não é possível copiar aqui',added:'Marcador adicionado',removed:'Último marcador removido',newSetup:'Nova configuração',tapNew:'Toque novamente para nova configuração',resetPeriod:'Reiniciar período atual',tapReset:'Toque novamente para reiniciar',hint:'Os controlos protegidos exigem um segundo toque dentro de 3 segundos.',invalid:'O tempo inicial deve estar no formato MM:SS, por exemplo 63:17.',p1:'1.ª parte',p2:'2.ª parte',pet1:'Prolongamento — 1.ª parte',pet2:'Prolongamento — 2.ª parte'},
    de: {appName:'Fußball-Spieluhr',wake:'Bildschirm aktiv',setupTitle:'Spieleinstellungen',setupIntro:'Spiel vor dem Start konfigurieren.',language:'Sprache',halfLength:'Halbzeitlänge (Minuten)',extraTime:'Verlängerung',enableET:'Verlängerung aktivieren',etLength:'Länge einer Verlängerungshälfte (Minuten)',startPeriod:'Startphase',startTime:'Startzeit des Spiels (MM:SS)',useSettings:'Einstellungen übernehmen',normalTime:'Reguläre Spielzeit',matchTime:'Spielzeit',ready:'Bereit',firstHalf:'Erste Halbzeit',secondHalf:'Zweite Halbzeit',et1:'Verlängerung — erste Hälfte',et2:'Verlängerung — zweite Hälfte',start:'starten',end:'beenden',tapEnd:'Nochmals drücken zum BEENDEN',ended:'beendet',matchEnded:'Spiel beendet',suspend:'Spiel unterbrechen',tapSuspend:'Nochmals drücken zum UNTERBRECHEN',resume:'SPIEL FORTSETZEN',suspended:'SPIEL UNTERBROCHEN — ALLE UHREN ANGEHALTEN',stoppage:'Nachspielzeit',notAccum:'Keine Erfassung',accum:'Unterbrechungszeit läuft',startDelay:'UNTERBRECHUNG STARTEN',stopDelay:'UNTERBRECHUNG STOPPEN',markers:'Review-Markierungen',mark:'MARKIEREN',show:'Markierungen anzeigen',hide:'Markierungen ausblenden',undo:'Letzte rückgängig',copy:'Markierungen kopieren',clear:'Markierungen löschen',tapClear:'Nochmals drücken zum Löschen',none:'Keine Markierungen gespeichert',copied:'Markierungen kopiert',copyFail:'Kopieren hier nicht verfügbar',added:'Markierung hinzugefügt',removed:'Letzte Markierung entfernt',newSetup:'Einstellungen anpassen',tapNew:'Nochmals drücken zum Anpassen',resetPeriod:'Aktuelle Phase zurücksetzen',tapReset:'Nochmals drücken zum Zurücksetzen',hint:'Geschützte Bedienelemente erfordern ein erneutes Drücken innerhalb von 3 Sekunden.',invalid:'Die Startzeit muss im Format MM:SS sein, z. B. 63:17.',p1:'1. Halbzeit',p2:'2. Halbzeit',pet1:'Verlängerung — 1. Hälfte',pet2:'Verlängerung — 2. Hälfte'},
    it: {appName:'Cronometro Partita',wake:'Schermo attivo',setupTitle:'Impostazione partita',setupIntro:'Configura la partita prima di iniziare.',language:'Lingua',halfLength:'Durata di un tempo (minuti)',extraTime:'Tempi supplementari',enableET:'Abilita tempi supplementari',etLength:'Durata di un tempo supplementare (minuti)',startPeriod:'Periodo iniziale',startTime:'Tempo iniziale della partita (MM:SS)',useSettings:'Usa queste impostazioni',normalTime:'Tempi regolamentari',matchTime:'Tempo partita',ready:'Pronto',firstHalf:'Primo tempo',secondHalf:'Secondo tempo',et1:'Supplementari — primo tempo',et2:'Supplementari — secondo tempo',start:'Avvia',end:'Termina',tapEnd:'Tocca di nuovo per TERMINARE',ended:'terminato',matchEnded:'Partita terminata',suspend:'Sospendi partita',tapSuspend:'Tocca di nuovo per SOSPENDERE',resume:'RIPRENDI PARTITA',suspended:'PARTITA SOSPESA — TUTTI I CRONOMETRI FERMI',stoppage:'Tempo di interruzione',notAccum:'Non in accumulo',accum:'Accumulo interruzione in corso',startDelay:'AVVIA INTERRUZIONE',stopDelay:'FERMA INTERRUZIONE',markers:'Marcatori per revisione',mark:'MARCA',show:'Mostra marcatori',hide:'Nascondi marcatori',undo:'Annulla ultimo',copy:'Copia marcatori',clear:'Cancella marcatori',tapClear:'Tocca di nuovo per cancellare',none:'Nessun marcatore registrato',copied:'Marcatori copiati',copyFail:'Copia non disponibile qui',added:'Marcatore aggiunto',removed:'Ultimo marcatore rimosso',newSetup:'Nuova impostazione',tapNew:'Tocca di nuovo per nuova impostazione',resetPeriod:'Reimposta periodo corrente',tapReset:'Tocca di nuovo per reimpostare',hint:'I comandi protetti richiedono un secondo tocco entro 3 secondi.',invalid:'Il tempo iniziale deve essere nel formato MM:SS, ad esempio 63:17.',p1:'1° tempo',p2:'2° tempo',pet1:'Supplementari — 1° tempo',pet2:'Supplementari — 2° tempo'}
  };

  const $ = id => document.getElementById(id);
  const setupScreen=$('setupScreen'),timerScreen=$('timerScreen'),languageSelect=$('language'),halfLengthInput=$('halfLength'),extraTimeEnabled=$('extraTimeEnabled'),etLengthInput=$('etLength'),startPeriodSelect=$('startPeriod'),startingTimeInput=$('startingTime'),setupSummary=$('setupSummary'),beginMatch=$('beginMatch');
  const matchEl=$('matchTime'),delayEl=$('delayTime'),periodEl=$('periodText'),mainAction=$('mainAction'),suspendButton=$('suspendButton'),suspendedBanner=$('suspendedBanner'),delayToggle=$('delayToggle'),delayCard=$('delayCard'),delayState=$('delayState'),wakeStatus=$('wakeStatus');
  const minus60=$('minus60'),minus10=$('minus10'),plus10=$('plus10'),plus60=$('plus60'),newSetup=$('newSetup'),resetPeriod=$('resetPeriod');
  const markButton=$('markButton'),markerCount=$('markerCount'),toggleMarkers=$('toggleMarkers'),undoMarker=$('undoMarker'),copyMarkers=$('copyMarkers'),clearMarkers=$('clearMarkers'),markerList=$('markerList'),markerToast=$('markerToast');

  let lang=localStorage.getItem(STORAGE_LANGUAGE)||'en'; if(!strings[lang])lang='en';
  let settings={halfMinutes:45,extraTime:false,etMinutes:15,startPeriod:'1H',startTimeMs:0};
  let period='1H',status='ready',matchBaseMs=0,matchStartedAt=null,delayAccumulatedMs=0,delayStartedAt=null,wakeLock=null,armedAction=null,armedAt=0,markersVisible=false;
  let markers=loadMarkers();
  const now=()=>performance.now();
  const L=k=>strings[lang][k]||strings.en[k]||k;

  function loadMarkers(){try{const x=JSON.parse(localStorage.getItem(STORAGE_MARKERS)||'[]');return Array.isArray(x)?x:[];}catch{return[];}}
  function saveMarkers(){try{localStorage.setItem(STORAGE_MARKERS,JSON.stringify(markers));}catch{}}
  function parseTime(v){const m=/^\s*(\d{1,3}):([0-5]\d)\s*$/.exec(v);return m?(Number(m[1])*60+Number(m[2]))*1000:null;}
  function formatMs(ms){const s=Math.max(0,Math.floor(ms/1000));return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0');}
  const halfMs=()=>settings.halfMinutes*60000,etHalfMs=()=>settings.etMinutes*60000;
  function periodStartMs(p){if(p==='1H')return 0;if(p==='2H')return halfMs();if(p==='ET1')return halfMs()*2;if(p==='ET2')return halfMs()*2+etHalfMs();return 0;}
  function periodName(p){return p==='1H'?L('firstHalf'):p==='2H'?L('secondHalf'):p==='ET1'?L('et1'):p==='ET2'?L('et2'):'';}
  function nextPeriod(p){if(p==='1H')return'2H';if(p==='2H'&&settings.extraTime)return'ET1';if(p==='ET1')return'ET2';return null;}
  function currentMatchMs(){return matchBaseMs+(matchStartedAt===null?0:now()-matchStartedAt);}
  function currentDelayMs(){return Math.max(0,delayAccumulatedMs+(delayStartedAt===null?0:now()-delayStartedAt));}
  function stopMatch(){if(matchStartedAt!==null){matchBaseMs=currentMatchMs();matchStartedAt=null;}}
  function stopDelay(){if(delayStartedAt!==null){delayAccumulatedMs=currentDelayMs();delayStartedAt=null;}}
  function resetDelay(){delayAccumulatedMs=0;delayStartedAt=null;}

  function rebuildStartPeriodOptions(){
    const current=startPeriodSelect.value||settings.startPeriod||'1H';
    const o=[['1H',L('p1')],['2H',L('p2')]];
    if(extraTimeEnabled.checked)o.push(['ET1',L('pet1')],['ET2',L('pet2')]);
    startPeriodSelect.innerHTML=o.map(x=>`<option value="${x[0]}">${x[1]}</option>`).join('');
    if(o.some(x=>x[0]===current))startPeriodSelect.value=current;
  }

  function updateSetupSummary(){
    const h=Math.max(1,Number(halfLengthInput.value)||45),
          et=Math.max(1,Number(etLengthInput.value)||15),
          full=h*2;
    setupSummary.innerHTML=`<strong>${L('normalTime')}:</strong> 00:00 → ${h}:00 → ${full}:00${extraTimeEnabled.checked?` → ${full+et}:00 → ${full+et*2}:00`:''}`;
  }

  function wakeYes(){return lang==='es'?'Sí':'on';}
  function wakeNo(){return lang==='es'?'No':'off';}

  async function requestWakeLock(){
    if(!('wakeLock'in navigator)){
      wakeStatus.textContent=`${L('wake')}: —`;
      return;
    }

    try{
      if(!wakeLock){
        wakeLock=await navigator.wakeLock.request('screen');
        wakeStatus.textContent=`${L('wake')}: ${wakeYes()}`;

        wakeLock.addEventListener('release',()=>{
          wakeLock=null;
          wakeStatus.textContent=`${L('wake')}: ${wakeNo()}`;
        });
      }
    }catch{
      wakeStatus.textContent=`${L('wake')}: —`;
    }
  }

  function clearArm(){
    armedAction=null;
    armedAt=0;
    [mainAction,suspendButton,newSetup,resetPeriod,clearMarkers].forEach(x=>x.classList.remove('armed'));
  }

  function arm(action){
    const ts=Date.now();
    if(armedAction===action&&ts-armedAt<=3000){
      clearArm();
      return true;
    }
    clearArm();
    armedAction=action;
    armedAt=ts;
    ({end:mainAction,suspend:suspendButton,newSetup,resetPeriod,clearMarkers}[action])?.classList.add('armed');
    setTimeout(()=>{
      if(armedAction===action&&Date.now()-armedAt>=3000){
        clearArm();
        updateControls();
      }
    },3100);
    return false;
  }

  function showToast(msg){
    markerToast.textContent=msg;
    setTimeout(()=>{
      if(markerToast.textContent===msg)markerToast.textContent='';
    },1800);
  }

  function renderMarkers(){
    markerCount.textContent=String(markers.length);
    markerList.classList.toggle('show',markersVisible);
    toggleMarkers.textContent=markersVisible?L('hide'):L('show');

    if(!markers.length){
      markerList.innerHTML=`<div class="marker-item"><span>${L('none')}</span></div>`;
      return;
    }

    markerList.innerHTML=markers.map((m,i)=>`<div class="marker-item"><span>${String(i+1).padStart(2,'0')}. <strong>${m.time}</strong></span><span class="marker-period">${periodName(m.period)||m.periodLabel||''}</span></div>`).join('');
  }

  function addMarker(){
    if(!['running','suspended'].includes(status))return;
    const m={time:formatMs(currentMatchMs()),period,createdAt:Date.now()};
    markers.push(m);
    saveMarkers();
    renderMarkers();
    showToast(`${L('added')}: ${m.time}`);
  }

  async function copyMarkerText(){
    const text=markers.map((m,i)=>`${i+1}. ${m.time} — ${periodName(m.period)||m.periodLabel||''}`).join('\n');

    if(!text){
      showToast(L('none'));
      return;
    }

    try{
      if(navigator.clipboard&&window.isSecureContext){
        await navigator.clipboard.writeText(text);
        showToast(L('copied'));
        return;
      }
    }catch{}

    const ta=document.createElement('textarea');
    ta.value=text;
    ta.style.position='fixed';
    ta.style.opacity='0';
    document.body.appendChild(ta);
    ta.select();

    try{
      showToast(document.execCommand('copy')?L('copied'):L('copyFail'));
    }catch{
      showToast(L('copyFail'));
    }

    ta.remove();
  }

  function applyTranslations(){
    document.documentElement.lang=lang;
    document.title=L('appName');
    localStorage.setItem(STORAGE_LANGUAGE,lang);

    const ids={
      appName:'appName',
      setupTitle:'setupTitle',
      setupIntro:'setupIntro',
      languageLabel:'language',
      halfLengthLabel:'halfLength',
      extraTimeLabel:'extraTime',
      extraTimeEnableLabel:'enableET',
      etLengthLabel:'etLength',
      startPeriodLabel:'startPeriod',
      startingTimeLabel:'startTime',
      beginMatch:'useSettings',
      matchLabel:'matchTime',
      delayLabel:'stoppage',
      markersLabel:'markers',
      hintText:'hint'
    };

    Object.entries(ids).forEach(([id,key])=>$(id).textContent=L(key));

    markButton.textContent=L('mark');
    undoMarker.textContent=L('undo');
    copyMarkers.textContent=L('copy');
    wakeStatus.textContent=`${L('wake')}: ${wakeLock?wakeYes():'—'}`;

    rebuildStartPeriodOptions();
    updateSetupSummary();
    updateControls();
    renderMarkers();
  }

  function actionLabel(action,p){
    const name=periodName(p);
    if(lang==='de'){
      if(action==='start')return `${name} ${L('start')}`;
      if(action==='end')return `${name} ${L('end')}`;
    }
    return `${L(action)} ${name}`;
  }

  function endConfirmLabel(p){
    return lang==='de'?`${periodName(p)} — ${L('tapEnd')}`:`${L('tapEnd')} ${periodName(p)}`;
  }

  function updateControls(){
    const running=status==='running',
          suspended=status==='suspended';

    mainAction.classList.toggle('running',running);

    if(armedAction==='end'&&running)mainAction.textContent=endConfirmLabel(period);
    else if(status==='ready')mainAction.textContent=actionLabel('start',period);
    else if(status==='running')mainAction.textContent=actionLabel('end',period);
    else if(status==='ended')mainAction.textContent=actionLabel('start',nextPeriod(period));
    else mainAction.textContent=L('matchEnded');

    periodEl.textContent=
      status==='ready'?`${L('ready')} — ${periodName(period)}`:
      status==='running'?periodName(period):
      status==='ended'?`${periodName(period)} ${L('ended')}`:
      status==='suspended'?`${periodName(period)} — ${L('suspend')}`:
      L('matchEnded');

    mainAction.disabled=suspended||status==='matchEnded';

    suspendButton.disabled=!(running||suspended);

    if(suspended){
      suspendButton.textContent=L('resume');
      suspendButton.classList.add('resume');
    }else if(armedAction==='suspend'){
      suspendButton.textContent=L('tapSuspend');
      suspendButton.classList.remove('resume');
    }else{
      suspendButton.textContent=L('suspend');
      suspendButton.classList.remove('resume');
    }

    suspendedBanner.textContent=L('suspended');
    suspendedBanner.classList.toggle('show',suspended);

    delayToggle.disabled=!running;

    if(!running)stopDelay();

    const live=delayStartedAt!==null;

    delayCard.classList.toggle('live',live);
    delayToggle.classList.toggle('active',live);
    delayToggle.textContent=live?L('stopDelay'):L('startDelay');
    delayState.textContent=live?L('accum'):L('notAccum');

    markButton.disabled=!['running','suspended'].includes(status);
    newSetup.textContent=armedAction==='newSetup'?L('tapNew'):L('newSetup');
    resetPeriod.textContent=armedAction==='resetPeriod'?L('tapReset'):L('resetPeriod');
    clearMarkers.textContent=armedAction==='clearMarkers'?L('tapClear'):L('clear');
  }

  languageSelect.value=lang;

  languageSelect.addEventListener('change',()=>{
    lang=languageSelect.value;
    applyTranslations();
  });

  extraTimeEnabled.addEventListener('change',()=>{
    etLengthInput.disabled=!extraTimeEnabled.checked;
    rebuildStartPeriodOptions();
    updateSetupSummary();
  });

  halfLengthInput.addEventListener('input',updateSetupSummary);
  etLengthInput.addEventListener('input',updateSetupSummary);

  startPeriodSelect.addEventListener('change',()=>{
    const h=Math.max(1,Number(halfLengthInput.value)||45),
          et=Math.max(1,Number(etLengthInput.value)||15);

    let m=0;

    if(startPeriodSelect.value==='2H')m=h;
    if(startPeriodSelect.value==='ET1')m=h*2;
    if(startPeriodSelect.value==='ET2')m=h*2+et;

    startingTimeInput.value=String(m).padStart(2,'0')+':00';
  });

  beginMatch.addEventListener('click',()=>{
    const parsed=parseTime(startingTimeInput.value);

    if(parsed===null){
      alert(L('invalid'));
      return;
    }

    settings={
      halfMinutes:Math.max(1,Number(halfLengthInput.value)||45),
      extraTime:extraTimeEnabled.checked,
      etMinutes:Math.max(1,Number(etLengthInput.value)||15),
      startPeriod:startPeriodSelect.value,
      startTimeMs:parsed
    };

    period=settings.startPeriod;
    matchBaseMs=settings.startTimeMs;
    matchStartedAt=null;
    resetDelay();
    status='ready';
    clearArm();

    setupScreen.style.display='none';
    timerScreen.style.display='block';

    updateControls();
    renderMarkers();
  });

  mainAction.addEventListener('click',async()=>{
    if(status==='ready'){
      matchStartedAt=now();
      status='running';
      clearArm();
      await requestWakeLock();
      updateControls();
      return;
    }

    if(status==='running'){
      if(!arm('end')){
        updateControls();
        return;
      }

      stopMatch();
      stopDelay();
      status=nextPeriod(period)?'ended':'matchEnded';
      updateControls();
      return;
    }

    if(status==='ended'){
      period=nextPeriod(period);
      matchBaseMs=periodStartMs(period);
      matchStartedAt=now();
      resetDelay();
      status='running';
      clearArm();
      requestWakeLock();
      updateControls();
    }
  });

  suspendButton.addEventListener('click',()=>{
    if(status==='suspended'){
      matchStartedAt=now();
      status='running';
      clearArm();
      requestWakeLock();
      updateControls();
      return;
    }

    if(status!=='running')return;

    if(!arm('suspend')){
      updateControls();
      return;
    }

    stopMatch();
    stopDelay();
    status='suspended';
    updateControls();
  });

  delayToggle.addEventListener('click',()=>{
    if(status!=='running')return;

    clearArm();

    if(delayStartedAt===null)delayStartedAt=now();
    else stopDelay();

    updateControls();
  });

  minus60.addEventListener('click',()=>{
    clearArm();
    delayAccumulatedMs=Math.max(0,delayAccumulatedMs-60000);
    updateControls();
  });

  minus10.addEventListener('click',()=>{
    clearArm();
    delayAccumulatedMs=Math.max(0,delayAccumulatedMs-10000);
    updateControls();
  });

  plus10.addEventListener('click',()=>{
    clearArm();
    delayAccumulatedMs+=10000;
    updateControls();
  });

  plus60.addEventListener('click',()=>{
    clearArm();
    delayAccumulatedMs+=60000;
    updateControls();
  });

  markButton.addEventListener('click',addMarker);

  toggleMarkers.addEventListener('click',()=>{
    markersVisible=!markersVisible;
    renderMarkers();
  });

  undoMarker.addEventListener('click',()=>{
    if(!markers.length){
      showToast(L('none'));
      return;
    }

    markers.pop();
    saveMarkers();
    renderMarkers();
    showToast(L('removed'));
  });

  copyMarkers.addEventListener('click',copyMarkerText);

  clearMarkers.addEventListener('click',()=>{
    if(!markers.length){
      showToast(L('none'));
      return;
    }

    if(!arm('clearMarkers')){
      updateControls();
      return;
    }

    markers=[];
    saveMarkers();
    renderMarkers();
    updateControls();
  });

  newSetup.addEventListener('click',()=>{
    if(!arm('newSetup')){
      updateControls();
      return;
    }

    stopMatch();
    stopDelay();

    timerScreen.style.display='none';
    setupScreen.style.display='block';

    clearArm();
    updateControls();
  });

  resetPeriod.addEventListener('click',()=>{
    if(!arm('resetPeriod')){
      updateControls();
      return;
    }

    stopMatch();
    stopDelay();

    matchBaseMs=periodStartMs(period);
    matchStartedAt=null;

    resetDelay();
    status='ready';
    clearArm();
    updateControls();
  });

  document.addEventListener('visibilitychange',()=>{
    clearArm();
    updateControls();

    if(document.visibilityState==='visible'&&status==='running'){
      requestWakeLock();
    }
  });

  function render(){
    matchEl.textContent=formatMs(currentMatchMs());
    delayEl.textContent=formatMs(currentDelayMs());
    requestAnimationFrame(render);
  }

  if('serviceWorker'in navigator){
    window.addEventListener('load',()=>{
      navigator.serviceWorker.register('./sw.js').catch(()=>{});
    });
  }

  applyTranslations();
  renderMarkers();
  render();
})();
