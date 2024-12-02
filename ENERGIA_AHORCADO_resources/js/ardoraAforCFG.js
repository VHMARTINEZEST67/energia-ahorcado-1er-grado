//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=359; timeIni=359; timeBon=0;
var successes=0; successesMax=9; attempts=0; attemptsMax=5;
var score=0; scoreMax=9; scoreInc=1; scoreDec=0;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#FF80FF"; colorText="#000000"; colorSele="#0080FF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Felicidades lo lograste!  SOLO SI  TERMINASTE ENTRE LOS TRES PRIMEROS EXIJE TUS PUNTOS  EXTRAS"; messageTime=""; messageError="Inténtalo de nuevo"; messageErrorG="Inténtalo de nuevo"; messageAttempts="¡Perdíste!, suerte para la próxima"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="RU5FUkdJQV9BSE9SQ0FETw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["VFJBTlNGT1JNQQ==","VFJBQkFKTw==","RUZFQ1RPIElOVkVSTkFERVJP","RcOTTElDQQ==","TlVDTEVBUg==","U0lTVEVNQSBUw4lDTklDTw==","T0JKRVRJVk8=","U0lTVEVNQSBUw4lDTklDTw==","U1VCU0lTVEVNQVM=",""];imaW=["","","","","","","","","",""];queW=["El ingenio humano no conoce límites actualmente desde las maneras más simples hasta las más sofisticadas la energía se usa y","Se debe generar movimiento en un cuerpo dado para producir un","El petróleo y el carbón se consideran contaminantes dado que emiten gases de","Para lograr una constante capacitación sin obstáculos se deforestan grandes zonas además debe considerarse el peligro para las aves y el ruido intenso que provocan al girar sus aspas  Energía","Genera energía con reactores de agua a presión lo que permite un bajo costo pero altamente contaminante para la población Energía","Se conoce al conjunto de elementos involucrados para obtener un producto o servicio","Un sistema técnico transforma una situación inicial a una situación deseada permite medir cuantitativamente y cualitativamente a esto se le conoce como","En dónde aplicamos las preguntas ¿Qué voy a hacer? ¿Con qué lo voy a hacer? ¿Cómo lo voy a hacer? y ¿Para qué lo voy a hacer? En un","Un sistema técnico está integrado por saberes conocimientos materiales y",""];var wordsL=[10,7,18,6,7,15,8,15,11,""];var altW=["","","","","","","","","",""];
var auW=["","","","","","","","","",""];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ "; wordsG=[];var wordsGL=[]; indexG=0; actMaxWidth=550; indexWord=0; totalWord=0;
var alterW=[];var imageW=[];questionW=[];audioW=[];profG=0; dirMedia="ENERGIA_AHORCADO_resources/media/"; textBNext="SIGUIENTE";
