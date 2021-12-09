'use strict'

/*
|--------------------------------------------------------------------------
| RecetaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class RecetaSeeder {
  static async run () {
    await Database.table('recetas').insert([
      {
        'nombre' : 'Abalon En Lecho De Lechuga',
        'ingredientes1' : '1 lata de abalones 50 gr. de champiñones, 1 cogollo de lechuga, 2 cucharadas de aceite vegetales, 6 cebolletas pequeñas, 6 discos finos de jengibre',
        'ingredientes2' : 'Para la salsa: 6 cucharadas de caldo de pescado 1 cucharada de salsa de ostras 1 cucharada de salsa de soya 1 cucharadita de maicena 1 cucharita de azúcar 1 cucharadita de aceite de sésamo',
        'preparacion' : 'Cortaremos los champiñones por la mitad Blanquearemos la lechuga, escaldándola en agua hirviendo, durante 1 minuto, sacarla y escurrirla bien, poniéndola en el fondo de una fuente. En un wok, calentaremos las 2 cucharadas de aceite, una vez caliente saltearemos las cebolletas, cortadas bastamente, usando también parte de los tallos verdes, y el jengibre cortado en tiritas. Una vez salteada la verdura, añadiremos los abalones, cortados en discos finos, salteándolos un poco. Añadiremos todos los ingredientes de la salsa. Cuando la salsa engorde un poco, verteremos todo sobre el lecho de lechuga. Podemos emplear otras verduras de hojas verdes. En lugar de abalones, también podemos elaborar este plato, con el músculo blanco de las vieiras, al ser este músculo más tierno que el de los abalones, podemos ponerlo entero o cortado por la mitad.',
        'img' : '../../../../assets/imagenes/Comida-China/AbalonEnLechoDeLechuga.JPG',
        'pais' : 'chinas',
    
},
/* {
        'nombre' : 'Arroz Congee',
        'ingredientes1' : '180 g arroz basmati 2.25 l caldo de verduras Salsa de soja Aceite de sésamo',
        'ingredientes2' : '',
        'preparacion' : 'En una olla grande, agregue el caldo o agua y el arroz. Cúbralo y cocínelo durante aproximadamente 1½ - 2 horas a fuego lento, hasta que el arroz y el agua hayan formado unas gachas. Las gachas se pueden consumir de forma líquida o más compacta, en cuyo caso, será necesario extender la cocción. Después de 2 horas, todavía queda algo de líquido, y las gachas siguen siendo bastante líquidas. Vierta las gachas en tazones. Sazone con salsa de soja y aceite de sésamo, si lo desea.',
        'img' : '../../../../assets/imagenes/Comida-China/chop suey.JPG',
        'pais' : 'chinas',
    
},
{
        'nombre' : 'Chow Mein',
        'ingredientes1' : '1 zucchini 1 cebolla 1/2 morrón rojo 1/2 morrón verde 2 dientes de ajo 1 cucharada de miel 3/4 taza de salsa de soja 1 paquete de fideos de arroz Sal y pimienta, a gusto Jengibre rallado, a gusto',
        'ingredientes2' : '',
        'preparacion' : 'Hidratar o cocinar los fideos de arroz según indicaciones del paquete. Cortar los vegetales del tamaño deseado: cebollas en trozos, morrones en tiras, zucchinis irregulares. Saltear en un wok aceitado las verduras. Deben quedar crocantes. Sumar el jengibre rallado, la miel y la salsa de soja. Revolver y dejar reducir unos minutos. Sumar los fideos, revolver y servir.',
        'img' : '../../../../assets/imagenes/Comida-China/Chow mein.JPG',
        'pais' : 'chinas',
    
},
{
        'nombre' : 'Dim Sum',
        'ingredientes1' : '20 unidades de pasta wonton 200 g. de cerdo picado 200 g. de langostinos picados 2 setas shitake seso y hidratadas 5 g. de cebolletas (la parte verde) 1 cucharadita de jengibre rallado un poco de zanahoria para decorar',
        'ingredientes2' : '1/2 cucharada de maizena 1 cucharada de salsa de ostras 1/2 cucharada de salsa de soja ligera 1 pizca de pimienta blanca 1/2 cucharadita de aceite de sésamo 1/2 cucharadita de sal',
        'preparacion' : 'Hidratar o cocinar los fideos de arroz según indicaciones del paquete. Cortar los vegetales del tamaño deseado: cebollas en trozos, morrones en tiras, zucchinis irregulares. Saltear en un wok aceitado las verduras. Deben quedar crocantes. Sumar el jengibre rallado, la miel y la salsa de soja. Revolver y dejar reducir unos minutos. Sumar los fideos, revolver y servir.',
        'img' : '../../../../assets/imagenes/Comida-China/dim  sum.JPG',
        'pais' : 'chinas',
    
}, */
{
        'nombre' : 'Ma Po Tofu',
        'ingredientes1' : '250 g de carne mixta picada 2 dientes de ajo 3 cucharaditas de fécula de patata 1 cucharada de salsa de ostras 1 cucharadita de aceite de sésamo 1 cucharada de salsa de soja Aceite de oliva 3 cucharaditas de pasta de guindilla picante',
        'ingredientes2' : '750 g de tofu firme 2 Cebolletas frescas 50 ml de caldo de pollo 1 cucharadita de cebollino picado 1 cucharada de ketchup Sal Ajinomoto Azúcar',
        'preparacion' : 'En primer lugar, en un bol no metálico, ponemos la carne picada, y añadimos la salsa de ostras, la salsa de soja, una pizca de sal, azúcar, ajinomoto y el aceite de sésamo. Mezclamos con las manos y dejamos adobar 15 minutos en la nevera tapada con papel film. Mientras, troceamos el tofu en láminas de 1 dedo de grosor. Las cortamos en cuadrados de 1 dedo. Picamos el ajo y la cebolleta en brunoise. Reservamos. En un vaso disolvemos la fécula de patata en un poco de agua fría. Reservamos. En una sartén tipo wok ponemos un poco de aceite de oliva, y salteamos el ajo y la cebolleta hasta que estén dorados. Añadimos la carne adobada y la cocinamos. Incorporamos el caldo, la pasta de guindilla y la cucharada de ketchup, dejamos cocer un minuto y añadimos la fécula mezclada con agua para que espese la salsa. Incorporamos el tofu cortado en dados y cocemos durante 3 minutos más. Servimos en un plato hondo y decoramos con el cebollino picado.',
        'img' : '../../../../assets/imagenes/Comida-China/Ma po tofu.JPG',
        'pais' : 'chinas',
    
},
{
        'nombre' : 'Pato Laqueado a la Pekinesa',
        'ingredientes1' : 'En primer lugar, en un bol no metálico, ponemos la carne picada, y añadimos la salsa de ostras, la salsa de soja, una pizca de sal, azúcar, ajinomoto y el aceite de sésamo. Mezclamos con las manos y dejamos adobar 15 minutos en la nevera tapada con papel film. Mientras, troceamos el tofu en láminas de 1 dedo de grosor. Las cortamos en cuadrados de 1 dedo. Picamos el ajo y la cebolleta en brunoise. Reservamos. En un vaso disolvemos la fécula de patata en un poco de agua fría. Reservamos. En una sartén tipo wok ponemos un poco de aceite de oliva, y salteamos el ajo y la cebolleta hasta que estén dorados. Añadimos la carne adobada y la cocinamos. Incorporamos el caldo, la pasta de guindilla y la cucharada de ketchup, dejamos cocer un minuto y añadimos la fécula mezclada con agua para que espese la salsa. Incorporamos el tofu cortado en dados y cocemos durante 3 minutos más. Servimos en un plato hondo y decoramos con el cebollino picado.',
        'ingredientes2' : '1 trozo de jengibre fresco Sal 2 cda salsa de soja 3 cda de miel ½ pepino ½ cebolleta Crepes chinas ',
        'preparacion' : 'En una olla grande pones suficiente agua a hervir, escaldas el pato durante 1 min. Sacas el pato del agua y dejas enfriar. Despegas la piel del pato ayudándote con una pajita soplando entre la piel y la carne del ave. La piel debe quedar completamente despegada, sin perder su forma. Atraviesas el extremo del cuello del pato con un gancho de metal, para poder colgarlo. Pones debajo del pato una cacerola. Pelas y picas el jengibre tan pequeño como puedas, puedes rallarlo. En una olla viertes el agua e incorporas la miel, el jengibre picado, la salsa de soja, el anís estrellado, la canela china, las semillas de hinojo, el chile en polvo y el vino. Pones sobre el fuego y cuando empiece a hervir apagas el fuego. Cuando el líquido esté todavía muy caliente, lo viertes sobre el pato colgado y te aseguras que el pato quede bien bañado. Una vez que la piel esté bien empapada de la salsa,  el pato tendrá un color marrón chocolate. Cuelgas el pato laqueado de Pekín en un lugar seco y fresco y lo dejas durante 5 horas Pasadas estas horas de reposo, la piel del pato deberá apreciarse seca y firme al tacto. Colocas el pato sobre una rejilla, por debajo pones una fuente para horno con 2 vasos de agua. Horneas a 240°C durante 20 min. Pasado este tiempo, bajas la temperatura  a 180 °C durante 1 hora. Una vez que haya pasado este tiempo, ya puedes sacar tu pato laqueado de Pekín del horno. Cortas en bastones finitos la cebolleta y los colocas en un bol con agua durante 10 min. Después los pones sobre un papel absorbente de cocina. Igualmente cortas el pepino.',
        'img' : '../../../../assets/imagenes/Comida-China/Pato laqueado a la pekinesa.JPG',
        'pais' : 'chinas',
    
},
{
        'nombre' : 'Pollo Gong Bao',
        'ingredientes1' : '2 pechugas de pollo deshuesadas sin piel 1 cucharada de aceite de cacahuete 8 guindillas rojas secas 1 cucharada de granos de pimienta de Sichuan 2 dientes de ajo 3 o 4 rodajas de jengibre fresco 1 cucharada de cebolleta picada 100 gr. de cacahuetes tostados Para el adobo: 2 cucharadas de salsa de soja 1 cucharada de vino de arroz 1/2 cucharada de azúcar',
        'ingredientes2' : 'Para la salsa: 1 cucharadita de salsa de soja clara 1 cucharadita de salsa de soja oscura 1 cucharadita de vinagre de arroz 1 cucharadita de aceite de sesamo 1 cucharadita de azúcar',
        'preparacion' : 'Empezamos troceando las pechugas de pollo en taquitos de unos dos centímetros, y reservamos. En un bol, preparamos el adobo con; la salsa de soja, el vino de arroz y el azúcar. Lo batimos enérgicamente, y lo vertemos encima del pollo, ya cortado, y lo dejamos macerar una media hora. Mientras, hacemos la salsa, mezclando todos los ingredientes, y reservamos. Echamos en un wok el aceite de cacahuete y, cuando esté bien caliente, añadimos las guindillas en dos trozos, junto con los granos de pimienta de Sichuan. Lo dejamos hasta que desprendan su aroma y añadimos los daditos de pollo escurridos. Cuando el pollo empiece a coger su color blanco, le añadimos las rodajitas de jengibre fresco, los dientes de ajo laminados y la cebolleta picada. Lo dejamos hacer dos o tres minutos removiéndolo continuamente. Pasado ese tiempo, le añadimos la salsa que tenemos reservada y lo removemos bien con el fin de que nos quede todo bien mezclado, añadimos los cacahuetes, volvemos a remover y listo… Servir bien caliente.',
        'img' : '../../../../assets/imagenes/Comida-China/pollo gong bao.JPG',
        'pais' : 'chinas',
    
},
{
        'nombre' : 'Rollitos Primavera',
        'ingredientes1' : '200 g. carne de ternera picada 2 zanahorias 1 cebolla 200 g. col china o repollo 100 g. brotes de soja ½ pimiento rojo', 
        'ingredientes2' : ' 8 hojas de masa filo Salsa de soja Aceite de sésamo Aceite de girasol para freír',
        'preparacion' : 'Cortamos las verduras en juliana y reservamos. En un wok, o en una sartén si no tuvierais, añadimos 3 cucharadas de aceite para freír. Cuando esté bien caliente agregamos la col y la cebolla. Rehogamos removiendo constantemente hasta que la verdura esté al dente. No debe quedar muy pochadita sino un poquito crujiente. Cuando esté casi lista añadimos al wok una cucharada de salsa de soja y unas gotitas de aceite de sésamo. Removemos unos segundos y retiramos. En el mismo wok volvemos a añadir un par de cucharadas de aceite para freír. Cuando esté caliente añadimos la zanahoria ya troceada y repetimos la operación. La cocinamos removiendo constantemente hasta que esté al dente, añadimos una cucharada de soja y un chorrito de aceite de sésamo, removemos y retiramos. Seguimos el mismo proceso con el pimiento en juliana y reservamos. Volvemos a engrasar el wok y esta vez incorporamos la carne picada. Podríamos sustituir la carne de ternera por cerdo o pollo sin problema, incluso eliminarla totalmente y convertir los rollitos en sólo vegetales. Dejamos que se cocina la carne a fuego alto hasta que comience a dorarse. Agregamos los brotes de soja, dos cucharadas de salsa de soja y un chorrito de aceite de sésamo y seguimos cocinando durante 1 o 2 minutos. Añadimos al wok el resto de verduras que tenemos reservadas y dejamos 2 minutos que se mezclen los sabores. Retiramos del fuego y reservamos hasta que se temple. Estiramos una hoja de pasta filo en una superficie de trabajo y colocamos una porción del relleno intentando reducir al máximo la cantidad de salsa. Si la mezcla está muy húmeda podría romperse la fina hoja de pasta filo. Enrolamos haciendo un rollo utilizando toda la hoja y freímos en abundante aceite. Estará listo en apenas 1 o 2 minutos. Retiramos a una bandeja con papel absorbente y servimos caliente.',
        'img' : '../../../../assets/imagenes/Comida-China/rollitos primavera.JPG',
        'pais' : 'chinas',
    
},
{
        'nombre' : 'Shrimp Chow',
        'ingredientes1' : 'Aceite Fideos Verduras Camarones Salsa',
        'ingredientes2' : '',
        'preparacion' : 'Cocine los camarones : Caliente el aceite a fuego alto y mezcle los camarones alrededor de la sartén hasta que estén cocidos. Transfiera a un plato aparte. Cocine las cebollas : En las cebollas restantes, dore las cebollas. Agregue las verduras restantes : Una vez que las cebollas se doren bien, agregue el apio y el repollo. Una vez que comiencen a dorarse y se pongan blandas, agregue el ajo y el jengibre. Prepare los fideos : Mientras se cocinan las verduras, rompa los fideos con agua corriente o en un recipiente con agua tibia. Cocine los fideos : Con las verduras transferidas a un plato aparte, agregue el aceite de sésamo a la caminata caliente junto con los fideos. Asegúrese de dejar que se cocinen, sin que los moleste, para que se doren bien en el fondo antes de tirar. Termina el Chow Mein de Camarones : Agrega los camarones cocidos y las verduras al wok con los fideos. Agregue la salsa de ostras y la salsa de soja y luego mezcle para combinar',
        'img' : '../../../../assets/imagenes/Comida-China/shrimp chow.jpg',
        'pais' : 'chinas',
    
},
{
        'nombre' : 'Siew Yhok',
        'ingredientes1' : '1 kilo de lomo de cerdo 2 cucharadas de miel 4 cucharadas de salsa de soya 1 cucharada de vino blanco (puede ser jerez)',
        'ingredientes2' : '6 cucharadas de azúcar Sal Salsa Hoisin: 50 centímetros cúbicos de salsa de soya ½ cucharadita de maicena ½ cucharadita de miel 25 mililitros de vinagre blanco o de arroz ¼ cucharadita de ajo en polvo 25 centímetros cúbicos de aceite de sésamo (puede ser algún aceite vegetal) Una pizca de salsa picante (a gusto) 50 centímetros cúbicos de agua mineral. ',
        'preparacion' : 'Lavamos bien la carne y la cortamos en 4 tiras a lo largo. Hacemos unos cortes, 4 más precisamente en diagonal, sin separar las tiras para que de esta forma el adobo humecte y penetre mucho más en la carne. Seguimos, y mezclamos todos los ingredientes menos la miel. Añadimos las tiras de la carne del cerdo y con el líquido las cubrimos muy bien mientras las pinchamos con la ayuda de un palillo o tenedor para que penetre mejor. Dejamos esta mezcla a una temperatura ambiente por un espacio de 4-5 horas y en tanto va pasando el tiempo las vanos dando vuelta cada 30 minutos. Una vez que pasaron las 5 horas, llevamos la preparacion a un horno precalentado previamente y a una temperatura de 190º C. Cuando la carne ya está bien caliente, se escurren las tiras de cerdo y se deja a un lado el adobo. En tanto, en la parte inferior del mismo ponemos una rustidera con unos 2 cm de agua y dejamos en el horno cocinando o calentando por aproximadamente una media hora. Pasado este tiempo la carne ya estará bien tostada con un color algo marrón o rojizo. Se quita la rejilla del horno, y se pasa la carne por el adobo volviéndola a poner una vez más en el horno pero del otro lado. Horneamos otra media hora para que quede parejo de ambos lados. Una vez listas las tiras, las pasamos a otra rejilla pero fría. De inmediato las untamos. No olviden que la carne debe estar muy pero muy caliente y con miel por todos lados aun en el interior de los cortes. En una cacerola pequeña hacemos hervir a fuego mediano el líquido de la maceración que habíamos dejado reservado para así lograr obtener una rica salsa. Cuando ya está lista, se la coloca en una salsera caliente.  Por último, trinchamos la carne y las presentamos en forma de tiras cubiertas con la salsa. Además pueden adornar este maravilloso y asombroso plato con unas ricas verduras crudas. ',
        'img' : '../../../../assets/imagenes/Comida-China/siew yhok.JPG',
        'pais' : 'chinas',
    
},
{
        'nombre' : 'Szechwan Chicken',
        'ingredientes1' : ' 1/4 taza de aceite vegetal 1 libra de pechugas de pollo deshuesadas y sin piel cortadas en trozos de 1 pulgada 1/4 taza de maicena 1/2 taza de cebolla amarilla cortada en trozos de 1/2 pulgada 1 pimiento rojo cortado en trozos de 1 pulgada 1 pimiento verde cortado en trozos de 1 pulgada 25 chiles rojos secos pequeños 1 cucharada de granos de pimienta de sichuan opcional 1 1/2 cucharaditas de ajo picado',
        'ingredientes2' : '1 cucharadita de jengibre picado sal y pimienta para probar Para la salsa 3 cucharadas de salsa de soja baja en sodio 1 1/2 cucharadas de salsa hoisin 1 cucharada de aceite de sésamo 1 1/2 cucharadas de azúcar morena 1 cucharada de maicena 1/4 taza de caldo de pollo',
        'preparacion' : 'Coloca el pollo en un bol con la maicena y sal y pimienta al gusto. Mezcle para combinar. Calentar el aceite vegetal en una sartén grande a fuego alto. Coloque el pollo en una sola capa en la sartén. Cocine durante 3-4 minutos por lado hasta que se doren. Es posible que deba realizar este paso por lotes. Retire el pollo de la sartén. Cubra para mantener el calor. Agregue la cebolla y los pimientos rojos y verdes a la sartén. Agregue los chiles y los granos de pimienta de Sichuan. Cocine durante 3-4 minutos o hasta que las verduras se ablanden. Agrega el ajo y el jengibre a la sartén; cocine por 30 segundos más. Regrese el pollo a la sartén con las verduras. Mientras se cocinan el pollo y las verduras, prepare la salsa. Batir todos los ingredientes de la salsa en un tazón pequeño. Agregue la salsa a la mezcla de pollo y deje hervir; cocine de 30 segundos a 1 minuto, o hasta que la salsa esté espesa. Servir inmediatamente.',
        'img' : '../../../../assets/imagenes/Comida-China/szechwan chicken.jpg',
        'pais' : 'chinas',
    
},
{
        'nombre' : 'Ajiaco',
        'ingredientes1' : '8 tazas de agua 4 pechugas medianas de pollo, sin piel y sin hueso 1 taza de guascas secas (Colombian plant) 2 lbs de papa criolla (yukon gold) 2 lbs de papa sabanera (white potatoes) 1 cebolla mediana picada 2 dientes de ajo picados 4 mazorcas grandes de maíz',
        'ingredientes2' : '1 cubo de caldo de gallina (pollo) 1/2 taza de arvejas o chícharos verdes (peas) Sal al gusto',
        'preparacion' : 'En una olla grande agrega el agua, el pollo y la mitad de las guascas. Déjalo cocinar por aproximadamente 40 minutos. Cuando ya el pollo este cocido lo sacas de la olla y lo colocas en un plato aparte; córtalo en trocitos y cúbrelo con papel aluminio para mantenerlo tibio. No tires el agua. Luego en la misma agua en que cocinaste el pollo debes agregar las dos clases de papa, la cebolla y el ajo. Deja cocinar por aproximadamente 2 horas para que la papa criolla se disuelva completamente. Agrega el pollo cortado en trocitos, las mazorcas, el caldo de gallina, las arvejas verdes (chícharos) y la sal a tu gusto. Mezcla con cuidado todos los ingredientes y déjalos cocinar por una hora más a fuego medio bajo. Agrega la mitad restante de las guascas y cocina por 5 minutos más.',
        'img' : '../../../../assets/imagenes/Comida-colombiana/Ajiaco.JPG',
        'pais' : 'colombianas',
    
},/* 
{
        'nombre' : 'Wonton',
        'ingredientes1' : '
        300 g. harina de trigo
        50 ml. de agua (si usáis huevos de tamaño normal, podéis añadir de 1/2 a 1 cucharada más de agua)
        2 huevos (yo utilizo tamaño XL)
        1 cucharadita sal',
        'ingredientes2' : '',
        'preparacion' : '
        Ponemos la harina en un bol.
        En otro bol pequeño, mezclamos 2 huevos con agua y sal.
        Vamos añadiendo poco a poco.
        Amasamos unos 10 minutos, hasta conseguir una masa lisa. Es una masa muy compacta y un poco difícil de trabajar, así que paciencia.
        Tapamos con un film y dejamos reposar en la nevera durante 1 hora.
        A continuación amasamos otros 10 minutos y la dividimos en 2 partes.
        Extendemos la masa en forma rectangular hasta conseguir un grosor de unos 3 milímetros. Usamos maicena cuando sea necesario.
        Una vez terminadas las 2 piezas, las doblamos por la mitad, las tapamos con un trapo húmedo y las dejamos reposar durante 1 hora más.
        Extendemos nuestra masa hasta conseguir un grosor de 1 milímetro, una vez tenemos la masa bien extendida, la cortamos en cuadrados de 9 x 9 centímetros.
        Los cubrimos bien con maicena para que no se peguen y ya están listos para usar. Se pueden conservar 3 días en la nevera y hasta 1 mes en el congelador.
        ',
        'img' : '../../../../assets/imagenes/Comida-China/wonton.JPG',
        'pais' : 'chinas',
    
},
{
        'nombre' : 'Zongzi',
        'ingredientes1' : '
        Arroz glutinoso redondo: 1.5 kg – 2 kg.
        Hojas de bambú disecado: 50 hojas.
        Hongos shitake mini disecado.
        Bondiola estofada: 1 kg.
        Salsa de soja: 50 ml.
        Aceite de girasol: 30 ml.
        Maní con piel: 300 g.
        Hilo de matambre.',
        'ingredientes2' : '',
        'preparacion' : '
        Para realizar este plato tardaremos 3 días. Durante 48-72 horas tendremos que dejar las hojas de bambú en remojo.
        El segundo día procederemos a cocinar la bondiola estofada, dejándola reposar en una heladera durante unas 24 horas. Es imprescindible que la carne esté completamente tierna.
        Debemos además lavar el arroz con mucha agua y ponerlo en remojo durante 24 horas también. Asimismo, tanto los maníes como los hongos de shitake deberán estar en remojo el mismo tiempo.
        El tercer día procederemos a lavar bien las hojas de bambú y las escurriremos correctamente. También escurriremos los hongos y el resto de alimentos.
        Salteamos el arroz con un poco de aceite y salsa de soja y le añadimos un poquito de sal al gusto.
        Debemos cortar los hilos con una longitud de unos 60 cm- 100 cm. Usaremos 2 hojas de bambú para formar con ellas un cono, las rellenamos de arroz, carne, hongos y arroz y lo cerramos. Acto seguido intentamos armar un tamal con 4 ángulos y lo atamos con el hilo.
        Tras esto, debemos cocinarlos en agua o al vapor durante aproximadamente 1 hora o 1 hora y media.',
        'img' : '../../../../assets/imagenes/Comida-China/zongzi.JPG',
        'pais' : 'chinas',
    
}, */
{
        'nombre' : 'Arepas',
        'ingredientes1' : '175 gr de harina de maíz precocida blanca (marca PAN) 270 ml de agua 1/2 cucharada sopera de sal',
        'ingredientes2' : '',
        'preparacion' : 'En un bol añade el agua y diluye la sal. Echa la harina de maíz precocida y mezcla muy bien hasta que se integren todos los ingredientes. Amasa durante unos minutos hasta obtener una mezcla compacta. Toma porciones de masa de unos 100 gr y haz primero una bola y luego aplástala ligeramente para que quede un panecillo de 1,5 cm de grosor, aproximadamente. Pon a calentar una sartén donde quepan bien las arepas o una plancha y engrásala con un poquito de aceite de oliva o de girasol. Cuando la sartén esté caliente, coloca las arepas y cocínalas, aproximadamente, durante 5 minutos por cada lado a fuego medio – alto. Deben dorarse por fuera y cocinarse por dentro, puedes comprobar cómo está abriéndola por la mitad para cerciorarte que la arepa está bien cocida. Y ya tienes unas deliciosas arepas caseras listas para rellenar con tus ingredientes favoritos.',
        'img' : '../../../../assets/imagenes/Comida-Colombiana/arepas.JPG',
        'pais' : 'colombianas',
    
},
{
        'nombre' : 'Arroz con coco ',
        'ingredientes1' : '1 lata de agua de coco 1/2 cucharadita de sal 1 taza de arroz de grano mediano 2/3 taza de leche evaporada Ralladura de limón verde',
        'ingredientes2' : '',
        'preparacion' : 'Haz hervir el agua de coco en una cacerola mediana a fuego medio. Agrega la sal y el arroz. Reduce el fuego a medio-bajo; pon la tapa. Cocina esto, revolviéndolo de vez en cuando, de 12 a 15 minutos hasta que el agua esté a punto de ser absorbida por completo. Agrega la leche evaporada. Pon la tapa y cocina el conjunto, revolviéndolo de vez en cuando, de 10 a 15 minutos más o hasta que el arroz esté tierno. Puedes agregar más agua en caso de que sea necesaria para conseguir que el arroz tenga la textura necesaria. Retira la cacerola del fuego. Incorpora, al gusto, la ralladura de limón verde, de así desearlo.',
        'img' : '../../../../assets/imagenes/Comida-Colombiana/arroz con coco.JPG',
        'pais' : 'colombianas',
    
},
{
        'nombre' : 'Bollo limpio ',
        'ingredientes1' : '1 ½ kg de maíz pilado Sal Hojas de mazorca grandes Cabuya',
        'ingredientes2' : '',
        'preparacion' : 'Poner a remojar el maíz desde víspera y limpiarlo de impurezas. Botar el agua y cocinar el maíz en agua fresca durante 30 minutos, dejar enfriar. Escurrir el agua, moler el maíz y amasarlo con un poco de sal hasta obtener una pasta suave. Lavar las hojas de mazorca y poner 3 cucharadas de masa en cada una, cubrirla con otra hoja y envolver bien, doblar los extremos y amarrar. Cocinar en agua hirviendo con un poquito de sal durante 30 minutos.',
        'img' : '../../../../assets/imagenes/Comida-Colombiana/bollo limpio.JPG',
        'pais' : 'colombianas',
    
},
{
        'nombre' : 'Carimañola ',
        'ingredientes1' : '1 kilo yuca al gusto sal 500 gr carne molida 2 cebollas grandes picada 1 zanahoria rallada 4 dientes ajo orégano seco',
        'ingredientes2' : 'pimienta picante molida de la negra 2 cdas vinagre 4 cdas salsa soya 1 cubo caldo de res',
        'preparacion' : 'Poner a sancochar la yuca en abunda te agua con bastante sal, esperar hasta que esté semi blanda. sacar y dejar enfriar. Luego pasarla por un molino. Amasarla Para la carne sofreír la cebolla picada con la zanahoria rallada el ajo, el orégano Luego agregar la carne molida, el vinagre, la salsa soya, el cubo de caldo de res la pimienta, la sal y tapar, dejar cocinar a juego lento Destapar revisar la sazón y esperar a a que seque con esto rellenaremos las empanadas de yuca. Armar las empanadas. Sofreír en abundante aceite. Y listo. ',
        'img' : '../../../../assets/imagenes/Comida-Colombiana/carimañola.JPG',
        'pais' : 'colombianas',
    
},
{
        'nombre' : 'Changua',
        'ingredientes1' : '1 taza de agua 3 cebollas verdes, picadas 2 tazas de leche Sal, al gusto 2 huevos 2 tajadas de pan blanco, cortado en cubos 2 cucharadas de cilantro fresco, picado',
        'ingredientes2' : '',
        'preparacion' : 'Pon a calentar el agua en una olla o cazuela de barro a fuego medio. Agrégale la cebolla verde y déjala cocinar durante 2 minutos. Agrega la leche y la sal. Reduce la temperatura y agrega los huevos. Cocina por 2 minutos o hasta que los huevos estén cocinados. Agrega los trozos de pan sobre la changua y decora con el cilantro picado.',
        'img' : '../../../../assets/imagenes/Comida-Colombiana/changua.JPG',
        'pais' : 'colombianas',
    
},
{
        'nombre' : ' Cuchuco',
        'ingredientes1' : 'Una taza de cuchuco de trigo 2 libras de espinazo de cerdo 14 tazas de agua Una taza de arveja verde 3 dientes de ajo machacados Una ramita de cilantro 3 tallos de cebolla larga 8 papas criollas pequeñas sin pelar Una taza de fríjoles',
        'ingredientes2' : 'Una taza de zanahoria picada en cuadritos 4 papas sabaneras peladas y finamente picadas 5 hojas de repollo troceadas Una taza de habas Sal Pimienta',
        'preparacion' : 'En una olla grande, cocine el espinazo en el agua junto con la cebolla larga, el cilantro y los ajos. Deje hervir a fuego lento durante 45 minutos o hasta que el espinazo esté tierno. Agregue el cuchuco y deje hervir durante 10 o 15 minutos más. Luego, incorpore la papa sabanera, la zanahoria, las arvejas, las habas, los fríjoles y deje cocinar hasta que el cuchuco comience a espesar. Posteriormente, adicione la papa criolla, el repollo y la sal. Cocine a fuego lento durante 20 minutos más revolviendo reiteradamente. En un plato hondo, sirva primero el espinazo y luego vierta la sopa. Decore con cilantro finamente picado. ',
        'img' : '../../../../assets/imagenes/Comida-Colombiana/cuchuco.JPG',
        'pais' : 'colombianas',
    
},
/* 
{
        'nombre' : 'Fritanga',
        'ingredientes1' : '
        5 vainas medianas de ají colorado o
        3 cucharas de ají colorado molido
        2 cucharillas de pimienta entera
        2 cucharillas de comino entero
        4 dientes de ajo
        3 Kg. carne de cerdo (preferentemente pierna)
        8 papas blancas peladas',
        'ingredientes2' : '1½ Lb pataska cocida
        1 Lb maíz pelado no cocido
        sal
        aceite',
        'preparacion' : '
        Una noche antes remojar el maíz PELADO seco en bastante agua, al día siguiente darle una lavada y ponerle a cocer con sal muy poco  hasta que el maíz se revienten.
        En un batán de piedra moler la pimienta, el comino y los ajos y separarlo. para darle un poco de sabor K’aspalo los AJIS,  pasando por el fuego de la cocina y también mole bien fino.
        Cortar el cerdo (chancho) en trozos pequeños y lávalos, y  hacerles cocer por lo menos unas 2 horas con bastante agua y sal a gusto y agrégalo los condimentos que moliste en el batan y sal a gusto.
        Saca el cerdo y en un sartén con aceite, freír de ambos lados todos los pedazos .
        Mientra tanto en otra olla  con 3 cucharadas de aceite,  hacer cocer el ají colorado durante diez minutos removiendo constantemente para que no se pegue, en unos 10 minutos ya cocerá el ají y  hecha  un cucharón de caldo del chancho.
        A esta preparacion de la nueva olla añadir los trozos de cerdo y dejar cocer a fuego lento durante 30 minutos, para que el sabor del aji entre a la carne.
        No dejes que se seque, sigue echando el caldo con los ingredientes.
        Servir en un plato el mote  y luego colocar pedazos de cerdo  y rociarlo con el ají colorado, acompañando con pataska o chuño  o al final o dos papas.
        ',
        'img' : '../../../../assets/imagenes/Comida-Colombiana/fritanga.JPG',
        'pais' : 'colombinas',
    
},
{
        'nombre' : 'Obleas ',
        'ingredientes1' : '
        ½ litro de agua 
        1 cucharada de azúcar
        1 cucharada de aceite
        1 cucharadita de bicarbonato de sodio
        ½ cucharada de maicena
        250 g de harina de trigo',
        'ingredientes2' : '',
        'preparacion' : '
        Colocar en un recipiente profundo el agua e ir añadiendo el azúcar, el aceite, el bicarbonato y la maicena.
        Mezclar bien con una varillas, hasta que el azúcar se disuelva
        Añadir la harina de trigo poco a poco e ir batiendo suavemente para que no se formen grumos; debe quedar una mezcla suave, pero no muy líquida.
        Encender la máquina de hacer obleas y aceitarla para que no se pegue la mezcla, dejarla encendida unos 5 minutos para que se caliente bien.
        Colocar en la plancha una cucharada de la mezcla y bajar la tapa para que se distribuya en toda la superficie.
        Dejar que se cocine por 50 segundos a 1 minuto; levantar la tapa y despegar; repetir la operación hasta que se acabe la mezcla.
        ',
        'img' : '../../../../assets/imagenes/Comida-Colombiana/obleas.JPG',
        'pais' : 'colombinas',
    
},
{
        'nombre' : ' Pan de bono',
        'ingredientes1' : '
        2 tazas de almidón o harina de yuca
        2 cucharadas de harina de maíz
        Sal (una cucharadita)
        Polvo para hornear (una cucharadita)
        2 cucharadas de azúcar
        200 gr de queso rallado',
        'ingredientes2' : '
        ½ taza (50 gr) de queso feta rallado
        3 cucharadas de mantequilla
        1 huevo',
        'preparacion' : '
        Precalienta el horno (425ºF - 220ºC).
        Agrega (procesador de alimentos) el almidón de yuca, la harina de maíz, polvo para hornear, azúcar, y sal.
        Procede a mezclar la mantequilla, el huevo, el queso fresco, y el queso feta.
        Luego agrega la leche (no toda de inmediato, poco a poco) hasta que la masa quede suave.
        Ahora vas a hacer con la masa círculos, del tamaño que quieras y las vas a ubicar en un molde sobre papel mantequilla .
        Lleva los pandebonos al horno y déjalos cocinar durante 25 minutos. Revisa continuamente para que no se vayan a quemar. 
        La clave es que tengan un color dorado intenso.
        
        ',
        'img' : '../../../../assets/imagenes/Comida-Colombiana/pan de bono.JPG',
        'pais' : 'colombinas',
    
},
{
        'nombre' : 'Pan de yuca',
        'ingredientes1' : '
        50 ml cúbicos de leche
        50 ml de aceite de maíz
        25 ml de agua
        2 huevos
        100 gramos de almidón de yuca
        100 gramos de queso semiduro',
        'ingredientes2' : '',
        'preparacion' : '
        Para empezar a preparar tus ricos pancitos de yuca y queso, calienta en una olla el agua con el aceite y la leche hasta que empiece a hacer burbujas.
        Vuelca de una vez los líquidos calientes del punto anterior sobre la fécula o almidón.
        Con ayuda de una cuchara de madera, integra bien los ingredientes.
        Es una masa algo dura, por lo que no te asombres si debes ejercer mucha fuerza para lograrlo. 
        Si prefieres, puedes amasarla con las manos o guantes, con cuidado de no quemarte y teniendo en cuenta que es algo pegajosa.
        Una vez que hayas integrado bien los ingredientes del pan y haya bajado la temperatura, agrega los huevos. Vuelve a integrar.
        Por último, integra el queso rallado o cortado en cubos pequeños.
        Arma los pancitos con ayuda de tus manos mojadas con aceite. Esto ayudará a que no se te pegue la preparacion en las manos.
        Dispón los pancitos de yuca en una asadera para horno con aceite en aerosol.
        Colócalos separados por unos 3 dedos entre sí para que al estirarse durante el horneado no se peguen y el calor se distribuya correctamente.
        Cocínalos en el horno fuerte (200 °C) por 15 minutos hasta que estén algo dorados.
        Cuando estén dorados, sácalos del horno y disfruta de tu pan de yuca.
        
        ',
        'img' : '../../../../assets/imagenes/Comida-Colombiana/pan de yuca.JPG',
        'pais' : 'colombinas',
    
},
{
        'nombre' : 'Rondon ',
        'ingredientes1' : '
        1 kg de pescado
        300 gr de yuca
        200 gr de ñame
        2 plátanos verdes
        2 cebollas
        2 chiles dulces
        1 chile habanero
       ',
        'ingredientes2' : '
        1 cabeza de ajo
        1 raíz de jenjibre
        Hojas de laurel
        1 chile picante entero
        1 cucharadita de curry
        Sal y pimienta al gusto',
        'preparacion' : '
        Pele y corte en trozos el ñame, la yuca y los plátanos verdes. Reserve.
        En una olla, ponga a cocinar el pescado en agua con cebolla, chile dulce y el ajo. Agregue sal, jengibre y laurel. Luego de hervir por unos minutos, retire el pescado y cuele el caldo.
        En una olla ponga a hervir la leche de coco con el caldo de pescado y agregue la yuca, el ñame y el plátano. Deje ablandar un poco y luego incorpore el pescado y el chile habanero.
        Rectifique el sabor y cocine unos 10 minutos.
        Sirva y disfrute.
        ',
        'img' : '../../../../assets/imagenes/Comida-Colombiana/rondon.JPG',
        'pais' : 'colombinas',
    
},
{
        'nombre' : 'Sancocho',
        'ingredientes1' : '
        1 libra de carne de res para guisar, picada en cubitos de 1 pulgada
        8 tazas de agua
        1 cebolla grande picada finamente
        2 dientes de ajo triturados
        1 pimiento verde picado finamente
        4 ajíes dulces picados finamente',
        'ingredientes2' : '
        ½ libra de calabaza picada en cubos de 1 pulgada
        ½ libra de yautía picada en cubos de 1 pulgada
        ½ libra de papas, picadas por la mitad
        ½ libra de batata blanca picado en cubos de 1 pulgada
        1 plátano verde picado en rodajas de ½ pulgada
        1 plátano maduro picado en rodajas de ½ pulgada',
        'preparacion' : '
        Combina todos los ingredientes para el caldo en una olla. Tapa y cocina a fuego alto hasta que hierva. 
        Luego baja a fuego mediano-bajo y cocina hasta que la carne esté tierna, más o menos unos 45 minutos.
        Añade todos los vegetales cortados en la olla con la carne, teniendo cuidado de no quemarte. Cocina a fuego mediano-alto hasta que los vegetales estén cocidos.
        Prueba el sancocho y ajusta la sal, si gustas. El sancocho estará listo cuando todos los vegetales estén tiernos y el caldo espese un poco.
        Sirve con una lasca de aguacate. Lo puedes acompañar con arroz o pan.
        ',
        'img' : '../../../../assets/imagenes/Comida-Colombiana/sancocho.JPG',
        'pais' : 'colombinas',
    
},
{
        'nombre' : ' Sudado de pollo',
        'ingredientes1' : '
        8 muslos de pollo sin la piel
        1 cucharada de aceite vegetal
        ½ taza de cebolla picada
        ½ de taza de pimientón rojo picado
        1 diente de ajo picado
        2 tazas de tomate picado
        1 cucharada de Sazuón con azafran
        ½ cucharadita de comino en polvo',
        'ingredientes2' : '
        ½ de taza de cilantro fresco picado
        ½ de cucharadita de sal
        ½ cucharadita de pimienta
        8 papas pequeuñas amarillas peladas y cortadas por la mitad
        3 tazas de caldo de pollo',
        'preparacion' : '
        En una olla grande, caliente el aceite vegetal a fuego medio.
        Añadir la cebolla y el pimiento rojo y saltee hasta que las cebollas estén transparentes, unos 3 minutos.
        A continuaciuón, auñadir los tomates, el ajo, la sal y la pimienta molida y sofría por 5 minutos muás.
        Agregue el pollo, el caldo de pollo, la sazuón y comino en polvo.
        Tapar y cocinar durante 25 minutos, revolviendo ocasionalmente.
        Añadir las papas y el cilantro y cocine por 30 minutos muás o hasta que las papas estén tiernas. 
        Sirva sobre arroz blanco.
        ',
        'img' : '../../../../assets/imagenes/Comida-Colombiana/sudado de pollo.JPG',
        'pais' : 'colombinas',
    
},
 */{
        'nombre' : ' Bacalao a la vizcaina',
        'ingredientes1' : '1 kg Bacalao 2 lt Agua tibia 1/2 Cebolla, finamente picada 6 Dientes de ajo, finamente picados 6 jitomates, sin semillas y en cubos chicos 2 tazas Puré de tomate 3/4 taza Aceite de Oliva 3 tazas Papas, en cubos y cocidas', 'ingredientes2' : ' 150 g Almendra, peladas y picadas 200 g Aceitunas verdes, sin hueso y picadas 1/2 taza Perejil picado 1 taza Chile güero en lata Sal y pimienta al gusto',
        'preparacion' : 'Coloca el bacalao en un refractario y cubre con agua tibia. Deja reposar por 2 noches antes de la preparacion. Cambia el agua cada 6 horas. Escurre y desmenuza, retira las espinas. Reserva.. Calienta el aceite y acitrona la cebolla y el ajo. Agrega el jitomate y mezcla. Cocina por 10 minutos o hasta que suelte sus jugos. Añade las papas y mezcla. Vierte el puré de tomate y mezcla. Cocina por 10 minutos. Agrega el bacalao, las aceitunas y las almendras. Tapa y cocina por 25 minutos. Mueve ocasionalmente. Agrega el perejil y mezcla. Sazona y mezcla. Cocina por 10 minutos más y sirve. Acompaña con los chiles güeros y pan.',
        'img' : '../../../../assets/imagenes/Comida-Española/bacalao a la vizcaina.JPG',
        'pais' : 'españolas',
    
},
{
        'nombre' : ' ',
        'ingredientes1' : '600 g de boquerones frescos limpios Harina Aceite de oliva virgen extra 1 limón Sal',
        'ingredientes2' : '',
        'preparacion' : 'Sala los boquerones. Dispón un plato con harina y reboza los boquerones por ambos lados. Pon una sartén al fuego con abundante aceite de oliva para freír los boquerones. Antes de añadirlos a la sartén, sacúdelos un poco para que suelten el exceso de harina y el rebozado quede más fino. Fríe los boquerones en tandas durante 3-4 minutos. Al retirarlos, déjalos sobre papel absorbente para eliminar el exceso de aceite. Sírvelos con unas rodajas de limón para decorar y también para poder añadirles unas gotitas de zumo al degustarlos.',
        'img' : '../../../../assets/imagenes/Comida-Española/boquerones fritos.JPG',
        'pais' : 'españolas',
    
},
{
        'nombre' : 'Chipirones ',
        'ingredientes1' : '1 kg de chipirones (limpios) 2 cebollas grandes 2 dientes de ajo 1 vasito de coñac sal perejil picado',
       'ingredientes2' : '',
        'preparacion' : 'Tiramos de los tentáculos con cuidado, introduciendo un dedo dentro del chipirón, para poder retirar también con un solo movimiento todos los interiores. Abrimos los tentáculos y tiramos de la boca para retirarla. Luego haciendo presión con dos dedos en la zona en donde se unen los interiores a los tentáculos, con la otra mano tiramos de los tentáculos para separarlos. También cortamos las aletas y las picamos. Retiramos la pluma, que es la piel transparente que queda en el interior del chipirón. Damos vuelta el chipirón, como si fuera un calcetín, para limpiarlo por dentro de cualquier resto de arena. Si son pequeños podemos solo meter un dedo dentro para limpiarlos, sin darlos vuelta. Secamos con papel absorbente para eliminar el exceso de agua.',
        'img' : '../../../../assets/imagenes/Comida-Española/chipirones.JPG',
        'pais' : 'españolas',
    
},
{
        'nombre' : 'Chorizo a la sidra ',
        'ingredientes1' : 'Chorizo fresco 1 kg Sidra de manzana natural 250 ml Patata cocida para acompañar (opcional)',
        'ingredientes2' : '',
        'preparacion' : 'Sacamos la cuerda a los chorizos y los colocamos en una cazuela con fondo. Los pinchamos con la punta de un cuchillo para que no revienten y suelten parte del jugo durante la cocción. Echamos por encima la sidra y ponemos a fuego alto. Cuando empiece a hervir dejamos a fuego vivo durante cinco minutos, lo bajamos y terminamos la cocción. El tiempo dependerá de la frescura, tamaño y calidad del chorizo, pero en unos 15 ó 20 minutos estarán, cuando el alcohol se haya evaporado y reducido el líquido, quedando una salsita en el fondo de la cazuela. Servimos inmediatamente.',
        'img' : '../../../../assets/imagenes/Comida-Española/chorizo a la sidra.JPG',
        'pais' : 'españolas',
    
},
{
        'nombre' : 'Cocido marileño',
        'ingredientes1' : 'Suficiente de agua 1 taza de gallina 1 taza de tocino 1 taza de jamón serrano, en punta 2 tazas de tuétano 1 1/2 tazas de garbanzo, remojados y limpios 2 zanahorias 1 nabo',
        'ingredientes2' : '4 papas Sal al gusto 1/2 tazas de fideo, cabellín 1 taza de col 1/2 tazas de chorizo 1/2 tazas de morcilla de arroz',
        'preparacion' : 'En una olla con agua cocina las carnes, la punta de jamón y los huesos; cuando empiece a hervir agrega los garbanzos; al segundo hervor, agrega la zanahoria, el nabo y cocina por 1 hora. Añade la papa y cocina por aproximadamente 1 horas más o hasta que todos los ingredientes estén suaves. Sazona con sal. Cuela y con el mismo, caldo cocina los fideos. Reserva. En una ollita hierve la col. Escurre y reserva. En una sartén cocina el chorizo y la morcilla. Sirve el caldo con los fideos, los garbanzos, la verdura y las carnes.',
        'img' : '../../../../assets/imagenes/Comida-Española/cocido madrileño.JPG',
        'pais' : 'españolas',
    
},
{
        'nombre' : 'Croquetas',
        'ingredientes1' : '2 cucharadas de leche de vaca sal 1/2 cucharaditas de pimienta 1/2 cucharaditas de cebollita verde, picada 2 yemas de huevo, batidas 3 cucharadas de harina',
        'ingredientes2' : '4 tazas de puré de papa, o papas molidas 1 huevo, batido pan molido aceites, para freír',
        'preparacion' : 'En un bowl ponga el puré de papa, la leche, sal, pimienta, cebollita verde picada, yemas de huevo batidas y harina. Mezcle bien todo y refrigere. Con una cuchara para hacer bolas de helado, forme bolas de la masa de papa y pase por el huevo batido y luego por el pan molido. Fría cada croqueta en un sartén lleno con aceite bien caliente hasta que se dore por todos los lados',
        'img' : '../../../../assets/imagenes/Comida-Española/croquetas.JPG',
        'pais' : 'españolas',
    
},
{
        'nombre' : 'Escalivadas',
        'ingredientes1' : '4 berenjenas grandes 8 pimientos rojos 2 dientes de ajo picados 1 dl de aceite de oliva Sal.',
        'ingredientes2' : '',
        'preparacion' : 'Asar las berenjenas y los pimientos a la brasa o al horno. Pelar y quitar la parte del tallo de las berenjenas. Pelar y retirar las semillas a los pimientos. Cortar las verduras en tiras. Espolvorear con ajo picado fino y aderezar con aceite y sal antes de servir.',
        'img' : '../../../../assets/imagenes/Comida-Española/escalivadas.JPG',
        'pais' : 'españolas',
    
},
/* {
        'nombre' : 'fideua ',
        'ingredientes1' : '
        500 gramos de fideos
        Medio pimiento rojo
        Medio pimiento verde
        2 calamares
        200 gramos de gambas
        Caldo de pescado casero
        Azafrán o colorante
        ',
        'ingredientes2' : '',
        'preparacion' : '
        Comenzamos la receta de fideuá dorando los fideos en la paella. Los ponemos a fuego medio y vamos dándoles vueltas poco a poco hasta que se vayan dorando. Una vez dorados a nuestro gusto los retiramos y reservamos.
        En esa paella, rehogamos a fuego medio los pimientos, haciendo un buen sofrito. Ponemos un poco de sal. Luego rectificamos pero con el caldo seguramente que se quede perfecto.
        Una vez rehogado agregamos los calamares limpios y cortados en trocitos. Dejamos que se hagan unos minutos.
        Incorporamos los fideos, las gambas peladas y cubrimos con caldo de pescado casero (agregamos el azafrán o el colorante). 
        La cantidad será más o menos la misma en mi caso (500 ml), pero dependerá de los fideos que uséis porque necesitará más o menos. Si necesita más caldo se lo podemos añadir cociendo, es más sencillo que el arroz.
        Cuando esté listo lo dejamos reposar unos 5 minutos a disfrutar.
        ',
        'img' : '../../../../assets/imagenes/Comida-Española/fideua.JPG',
        'pais' : 'españolas',
    
},
{
        'nombre' : 'Gambas al ajillo ',
        'ingredientes1' : '
        600 gr de gambas
        4 dientes de ajo
        1/2 guindilla
        aceite
        sal
        perejil picado',
        'ingredientes2' : '',
        'preparacion' : '
        Pela las gambas en crudo. Calienta el aceite y fríe los ajos en láminas y la guindilla cortada en aros.
        Después agrega las gambas, sazona y deja que se hagan unos minutos dándoles vueltas en la sartén.
        Espolvorea con perejil y sirve.
        ',
        'img' : '../../../../assets/imagenes/Comida-Española/gambas al ajillo.JPG',
        'pais' : 'españolas',
    
},
{
        'nombre' : 'Paella',
        'ingredientes1' : '
        6 salchichas rebanadas
        200 g de chorizo cortado en rebanadas
        200 g de carne de cerdo cortada en cubos
        1 pechuga de pollo sin hueso y cortada en cubos
        3 pescados sierra cortados en rebanadas
        20 camarones lavados
        100 g de almejas lavadas
        100 g de ejotes',
        'ingredientes2' : '
        1 pimiento rebanado en juliana
        ½ cucharadita de cebolla en polvo
        1 cucharadita de ajo en polvo
        1 cucharadita de azafrán en polvo
        2 cucharadas de consomé en polvo
        Aceite de oliva suficiente',
        'preparacion' : '
        Si no tienes una paellera, usa una cacerola donde quepan todos los ingredientes y pon a calentar el aceite.
        A fuego lento, fríe las salchichas y después agrega el pollo, la carne de cerdo, el chorizo, los ejotes y el pimiento, 
        integra perfectamente y después agrega los condimentos (el ajo en polvo, la cebolla en polvo, el consomé, sal y pimienta).
        Mueve hasta que la carne tome un color dorado.
        Agrega las tazas de arroz y las de agua y cocina por dos o tres minutos más.
        Ahora integra el pescado, los camarones, las almejas y el azafrán.
        Tapa con papel aluminio y deja cocinando a fuego bajo hasta que el agua se evapore y el arroz quede en su punto adecuado de cocción. 
        .A disfrutar',
        'img' : '../../../../assets/imagenes/Comida-Española/paella.JPG',
        'pais' : 'españolas',
    
},
{
        'nombre' : 'Pimientos rellenos',
        'ingredientes1' : '
        4 Piezas Pimiento morrón limpios
        2 Cucharadas Aceite de maíz
        2 Tazas Champiñones rebanados
        100 Gramos Queso tipo manchego rallado
        4 Cucharadas Sazonador Líquido MAGGI®',
        'ingredientes2' : '',
        'preparacion' : '
        Lleva los pimientos al horno de microondas por 7 minutos. 
        Luego, mételos en una bolsa de plástico hasta que suden lo suficiente y de esta manera los puedas pelar más fácilmente. Corta la parte superior de cada pimiento.
        Aparte, en una sartén con aceite caliente sofríe los champiñones hasta que doren junto con el Líquido Sazonador MAGGI® . Retira del fuego y mezcla con el queso tipo manchego.
        Rellena los pimientos con esta preparacion. 
        Acomódalos en un recipiente y lleva por 30 segundos al horno de microondas.
        ',
        'img' : '../../../../assets/imagenes/Comida-Española/pimientos rellenos.JPG',
        'pais' : 'españolas',
    
},
{
        'nombre' : 'Pisto',
        'ingredientes1' : '
        400 g. de tomates maduros
        1 cebolla grande
        1 pimiento rojo
        1 pimiento verde
        1 calabacín
        1 diente de ajo
        50 ml. de vino blanco',
        'ingredientes2' : '
        Sal (al gusto de cada casa)
        Aceite de oliva virgen extra suave',
        'preparacion' : '
        Lavamos las verduras. Las picamos en “brunoise” (dados pequeños), de similar tamaño. El diente de ajo, bien picadito. 
        En una cazuela o en una sartén alta, echamos una lámina de aceite de oliva virgen extra y calentamos. Cuando coja temperatura, añadimos la cebolla y sofreímos.
        A continuación el ajo y los pimientos. Mezclamos bien.
        Salamos al gusto, y añadimos un buen chorro de vino blanco. En este punto, tapamos la cazuela, bajamos a fuego lento y cocinamos 30 minutos.
        El siguiente paso es incorporar el calabacín. Mezclamos de nuevo, tapamos y seguimos cocinando otros 20 minutos. A fuego bajo, pero que se aprecie un “chup chup” continuo.
        Los tomates cortados en dados, los trituramos con la batidora, y los añadimos al resto de verduras.
        Mezclamos, rectificamos de sal si es necesario y dejamos cocinar 20 minutos más (con la cazuela tapada). Pasado el tiempo, tendremos listo un delicioso pisto de verduras. 
        ',
        'img' : '../../../../assets/imagenes/Comida-Española/pisto.JPG',
        'pais' : 'españolas',
    
},
{
        'nombre' : 'Pulpo a la gallega',
        'ingredientes1' : '
        Suficiente de agua
        1 cucharada de sal de mar, para cocer el pulpo
        800 gramos de pulpo, entero, limpio
        3 papas, con cáscara
        2 cucharadas de paprika
        2 cucharadas de aceite de oliva
        1 pizca de sal',
        'ingredientes2' : '',
        'preparacion' : '
        Hierve agua en una cacerola y agrega sal. Cuando el agua esté hirviendo con una burbuja alta, toma el pulpo de la cabeza, de manera que cuelguen los tentáculos.
        Metemos el pulpo en agua hirviendo sin soltarlo y lo sacamos 3 veces seguidas, a la tercera lo metemos por completo en el agua hasta que lo cubra. 
        Al hacer esto, el pulpo quedará terso y evitaremos que se despelleje al cocerlo. Cocina por 18 minutos.
        Pasado el tiempo, agrega las papas y cocina por 20 minutos más. Para comprobar que el pulpo está cocido, puedes atravesar un palillo de madera en el centro del pulpo, si no opone resistencia es que está listo.
        Sobre una tabla corta el pulpo en trozos medianos y las papas en rodajas.
        En un plato redondo de madera sirve una cama de papas, coloca encima el pulpo, espolvorea con la paprika, el aceite de oliva y la sal gruesa.
        ',
        'img' : '../../../../assets/imagenes/Comida-Española/pulpo a la gallega.JPG',
        'pais' : 'españolas',
    
},
{
        'nombre' : 'Tortilla de papa ',
        'ingredientes1' : '
        5 papas, grandes peladas y en rebanadas muy delgadas
        1 cebolla, grande, rebanada en gajos delgaditos
        1/2 tazas de aceite de oliva
        9 huevos
        al gusto de pimienta, al gusto',
        'ingredientes2' : '',
        'preparacion' : '
        Ponga a calentar el aceite de oliva en un sarten grande (del tamaño de la tortilla de patatas).
        Agregue las papas y la cebolla en rebanadas muy delgadas.
        Cocine a fuego medio moviendo ocasionalmente hasta que la papa se empiece a deshacer y este cocida, unos 20 minutos. Ponga sal y pimienta al gusto.
        En un plato hondo, mezcle los huevos con un tenedor hasta que se esponjen un poco.
        Deje cocer con las papas hasta que se vea la orilla dorada y que el centro ya casi no se mueva.
        Voltee la tortilla en un sartén del mismo tamaño (ya engrasada con aceite de oliva y caliente).
        Una vez que se termine de cocer, apague el fuego y deje enfriar ligeramente.
        Desmolde sobre un platón y sirvala a temperatura ambiente. 
        ',
        'img' : '../../../../assets/imagenes/Comida-Española/tortillas de papa.JPG',
        'pais' : 'españolas',
    
},
 */{
        'nombre' : 'Omuraisu ',
        'ingredientes1' : '3 huevos 30 gr de pollo Media cebolla pequeña Un puñado de champiñones 60 gr de arroz cocido japonés 1 cucharada de vino blanco',
        'ingredientes2' : 'Ketchup Sal y pimienta Aceite para freír.',
        'preparacion' : 'En primer lugar, prepara los ingredientes sólidos. Corta la cebolla en juliana o tiras finas, el pollo en dados pequeños y los champiñones en láminas y luego por la mitad. Seguidamente, caliente un poco de aceite en una sartén y fríe la cebolla, el pollo y los champiñones a fuego medio. Cuando la cebolla esté transparente, añade un par de cucharadas de ketchup, el arroz cocido y el vino blanco. Añade sal y pimienta al gusto. Aparte, bate los huevos. Caliente una sartén mediana con un poco de aceite. Cuando esté caliente, echa los huevos batidos y repártelos por toda la sartén. Con unos palillos de cocina puedes ayudar a que se vaya cocinando todo el huevo. Cuando el huevo esté casi listo, pero no del todo, apaga el fuego. Añade entonces la mezcla de arroz en uno de los extremos. Finalmente, dobla la tortilla con ayuda de una espátula o de la manera que te resulte más fácil. Sirve la tortilla haciendo un dibujo con ketchup en el centro de la misma. Sí, este paso es totalmente opcional, pero si has estado en Japón y has comido omuraisu, te habrás dado cuenta de que siempre viene con un dibujo hecho con el ketchup. Generalmente, además, es un corazón.',
        'img' : '../../../../assets/imagenes/Comida-Japonesa/omuraisu.JPG',
        'pais' : 'japonesa',
    
},
{
        'nombre' : 'Onigiri',
        'ingredientes1' : 'Dos medidas de arroz japonés blanco cocido Láminas de alga seca nori Relleno 1: Atún y mayonesa Relleno 2: Copos de bonito seco katsuobushi y salsa de soja Agua ',
        'ingredientes2' : 'Una pizca de sal Una pizca de sésamo blanco',
        'preparacion' : 'En primer lugar, partimos de la base de que tienes ya arroz cocido y reposado en la suihanki. Si no tienes, lo habrás cocinado en olla y lo habrás dejado reposar igualmente. Seguidamente, prepara los ingredientes que vayas a necesitar para rellenar y finalizar los onigiri. En este caso, prepara un cuenco con atún en conserva y mayonesa y otro con copos de bonito y salsa de soja. Corta las láminas de alga nori en tiras de 2 o 3 cm de ancho y unos 10 cm de longitud. A continuación, dale forma a los onigiri. Si tienes moldes para onigiri, sigue las instrucciones de los mismos: moja con agua los bordes, añade el arroz y, con la ayuda de los dedos, deja espacio suficiente para añadir el relleno, tapa con arroz, presiona y dale forma y, finalmente, extrae del molde. Si no tienes moldes, usa las manos. Para ello, humedécelas y espolvoréalas con sal y sésamo. Toma una porción de arroz para darle forma y ve presionando para compactarlo. Seguidamente, hazle un agujero en el medio donde pondrás el relleno y tapa con más arroz, volviendo a presionar para darle forma y que el exterior queda compacto. Intenta hacer una forma triangular aunque si no te sale, da igual. Para finalizar, cubre medio onigiri con las tiras de alga nori que has cortado previamente. Si los vas a comer en casa, hazlo en el último momento, junto antes de comer, para que el alga siga estando crujiente.',
        'img' : '../../../../assets/imagenes/Comida-Japonesa/onigiri.JPG',
        'pais' : 'japonesa',
    
},
{
        'nombre' : 'Pollo teriyaki',
        'ingredientes1' : '4 pechugas de pollo enteras 1 cebolleta grande 200 ml. salsa de soja 100 ml. de Mirin 100 ml. de sake 100 g. de azúcar blanquilla',
        'ingredientes2' : '5 g. de piel de jengibre fresco 4 cucharadas de aceite de oliva suave Para acompañar: 250 g. de arroz basmati Sundari ',
        'preparacion' : 'La salsa teriyaki se hace mezclando y calentando cuatro ingredientes: azúcar, takara mirin, salsa de soja y sake (esté último puede ser sustituido por otro tipo de alcohol) y yo además le añado la frescura del jengibre. Los ingredientes no tienen porqué estar en la misma proporción, sino que depende de la receta. Preparamos nuestra salsa echandoo la salsa de soja, el Mirin, el azúcar, el sake y la piel de jengibre a un cazo. Calentamos a fuego alto y removemos hasta que se disuelva el azúcar. Dejamos cocer durante 3 minutos removiendo de vez en cuando. Colamos la salsa y reservamos. En caso de que no queráis hacer la salsa en casa tenéis la opción de comprarla ya hecha, pero no queda igual de rico. preparacion del pollo teriyaki. Presentación final Limpiamos las pechugas de pollo de posibles restos de grasa y venitas que pueda tener. Las troceamos en dados no demasiado pequeños. Como acompañamiento al pollo lo más habitual es utilizar cebolla o cebolleta fresca que se cocina con la carne. Con cualquiera de las dos conseguiremos que al final quede caramelizada gracias al azúcar de la salsa teriyaki. En este caso hemos elegido una cebolleta grande, la cortamos en juliana en tiras gruesas. En una sartén amplia ponemos a calentar el aceite y añadimos los trozos de pollo y la cebolleta. Doramos durante unos 5 o 6 minutos. Añadimos la salsa teriyaki que tenemos preparada y dejamos cocer a fuego medio durante 15 minutos. Veremos que el pollo está brillante, como lacado con la salsa, y esta casi se ha consumido. Servimos el pollo con arroz blanco, si os atrevéis os dejo con esta receta de arroz basmati, ideal para este plato.',
        'img' : '../../../../assets/imagenes/Comida-Japonesa/pollo teriyaki.JPG',
        'pais' : 'japonesa',
    
},
{
        'nombre' : 'Ramen',
        'ingredientes1' : '1 ½ ℓ de caldo de pollo 1 poro mediano cortado en trozos medianos 2 cebollas cambray cortadas en trozos medianos 6 hongos shiitake deshidratados y cortados en trozos medianos 10 g de jengibre fresco 1 diente de ajo 1 anís estrella 1 lámina de alga nori ',
        'ingredientes2' : '4 rebanadas gruesas de tocino Para el montaje. 2 porciones de fideos de ramen 30 ml de base de soya y miso 2 huevos cocidos, tiernos',
        'preparacion' : 'Ponga el caldo de pollo sobre el fuego, incorpore el resto de los ingredientes y deje que hierva durante 30 minutos. Cuele el caldo y póngalo nuevamente sobre el fuego durante otros 30 minutos. Para el Montaje. Hierva los fideos de ramen durante 8 minutos o hasta que su textura sea flexible y suave. Distribuya la base de soya y miso en dos tazones. Distribuya los fideos cocidos en los tazones y mezclelos muy bien con la base de soya y miso, sirva el caldo caliente sobre ellos. Corte los huevos cocidos por la mitad. Coloque los huevos cocidos, el germen de soya, el cebollín picado y los granos de elote sobre los tazones, espolvoree el ajonjolí negro.',
        'img' : '../../../../assets/imagenes/Comida-Japonesa/ramen.JPG',
        'pais' : 'japonesa',
    
},
{
        'nombre' : 'Sashimi ',
        'ingredientes1' : '1 medallón de atún Dolores®, Tuny® 1 cucharadita de ajonjolí 1 cucharadita de ajonjolí negro 2 cucharadas de salsa de soya 1 cucharadita de aceite de ajonjolí',
        'ingredientes2' : '1 cucharada de jugo de limón 1 cucharada de cebollín 1 cucharadita de jengibre, rallado    ',
        'preparacion' : 'Cortar el atún congelado en láminas delgadas. Mezclar la soya y el limón y el jengibre rallado. Coloca el atún en un plato. Sirve la salsa encima del atún y unas gotas de aceite de ajonjolí. Espolvorea el ajonjolí y el cebollín picado. ',
        'img' : '../../../../assets/imagenes/Comida-Japonesa/sashimi.JPG',
        'pais' : 'japonesa',
    
},
{
        'nombre' : 'Soba',
        'ingredientes1' : '1.5 litros de agua 1 trozo grande de kombu unos 15 – 18 gramos 2 setas shiitake secas 300 gramos de fideos soba 175 ml de salsa de soja 120 ml de mirin  ',
        'ingredientes2' : '',
        'preparacion' : 'La noche anterior poner el agua, kombu y setas en un bol grande. Tapar y dejar en la nevera hasta que vayas a preparar la sopa. Llevar una olla de agua a ebullición y añadir los fideos. Hervir según las indicaciones del producto hasta que estén al dente. Escurrir y lavar con agua fría, frotándolos suavemente para sacar el almidón. Volver a escurrir y reservar. Retirar el kombu y las setas del agua y llevar el caldo a ebullición. Añadir la salsa de soja, mirin y azúcar y mezclar bien para disolver el azúcar. Dividir la soba en cuatro bols y servir',
        'img' : '../../../../assets/imagenes/Comida-Japonesa/soba.JPG',
        'pais' : 'japonesa',
    
},
{
        'nombre' : 'Sopa de misu ',
        'ingredientes1' : '1 l de agua o caldo dashi 15 g de alga wakame deshidratada 3 cucharadas de miso 200 g de tofu 50 g de puerro ', 
        'ingredientes2' : ' 50 g de cebolleta Fideos soba (opcional).',
        'preparacion' : 'Ponemos el agua en una olla y la llevamos a ebullición. Una vez comience a hervir, sacamos un poco de agua a un vaso para disolver después el miso. Metemos en la olla el alga wakame y lo dejamos cocer 5 minutos. Después echamos el tofu cortado en dados pequeños de 1 cm aproximadamente y la verdura en trocitos pequeños. Cocinamos la sopa otros 5 minutos Disolvemos el miso en agua y, cuando la sopa esté lista, la retiramos del fuego y le añadimos el agua con miso disuelto. Lista para servir. Si te gusta con fideos soba y de manera opcional, solo tienes que seguir las instrucciones del fabricante para cocerlos. Una vez los tengas pones una pequeña cantidad en cada cuenco vertiendo la sopa de miso por encima, de manera similar a cuando hacemos sopa ramen en casa.',
        'img' : '../../../../assets/imagenes/Comida-Japonesa/sopa de misu.JPG',
        'pais' : 'japonesa',
    
},
/* {
        'nombre' : 'Rollos de Sushi empanizado',
        'ingredientes1' : '
        1 1/2 tazas de arroz de sushi
        suficiente de agua, fría para enjugar el arroz
        3 tazas de agua, caliente para la cocción del arroz
        4 cucharadas de vinagre de arroz
        3 cucharaditas de azúcar
        1 cucharadita de sal
        5 algas nori
        ',
        'ingredientes2' : '
        1 taza de queso crema, en bastones para el relleno
        1 taza de pepino, en bastones, sin cáscara para el relleno
        1 taza de zanahoria, en bastones, sin cáscara para el relleno
        1 1/2 tazas de surimi, en bastones para el relleno
        ',
        'preparacion' : '
        Remoja el arroz en agua fría por 5 minutos, escurre y repite tres veces.
        En una ollita con tapa, cocina el arroz con 3 tazas de agua caliente por 10 minutos, a fuego bajo. Retira del fuego. Extiende sobre una charola y enfría por 15 minutos.
        Mezcla el vinagre de arroz con el azúcar y la sal. Luego vértelo sobre el arroz frío e incorpora. Reposa unos minutos.
        Arma el rollo de sushi: sobre un tapete de bambú con plástico adherente, coloca una pieza de alga Nori; con tus manos húmedas, cubre con arroz; da la vuelta y rellena con los bastones de queso crema, pepino, zanahoria y surimi. Cierra con ayuda del tapete y dale forma al apretarlo. Refrigera por 10 minutos.
        Para empanizar el rollo, cúbrelo con la harina, pásalo por el huevo y empanízalo con el pan molido. Fríe en aceite vegetal caliente. Escurre.
        Corta el rollo en rodajas de 1 centímetros de ancho. Coloca en un plato extendido, acompaña con pepino y decora con ajonjolí. Disfruta con salsa de soya y chile serrano.
        
        ',
        'img' : '../../../../assets/imagenes/Comida-Japonesa/rollos de sushi empanizado.JPG',
        'pais' : 'japonesa',
    
},
{
        'nombre' : 'Tekoyaki',
        'ingredientes1' : '
        225 gr Harina de takoyaki
        2 Huevos
        Aceite de oliva o girasol
        1/4 Repollo
        200 gr Pulpo hervido y troceado en pequeños tacos
        700 ml Agua
        1/2 Cebolla picada fina
        ',
        'ingredientes2' : '
        Benishōga (jengibre encurtido)
        Mayonesa japonesa o ligera
        Salsa Tonkatsu
        ',
        'preparacion' : '
        Lo primero que tendrás que hacer es preparar los ingredientes sólidos de la receta: Se corta el pulpo en pequeños trocitos (que puedan caber dentro de tus bolas de Takoyaki); se pica el repollo en trozos muy pequeños, la cebolla y el benishōga.
        Para el siguiente paso necesitarás un cuenco grande, en donde se añadirá la harina, los huevos y el agua. Se mezclan bien hasta que se obtenga una mezcla homogénea y cremosa, no tiene que quedar muy liquida (si ha quedado muy liquida puedes agregar un poco más de harina hasta que quede más cremosa).
        A la mezcla se le añade benishōga troceado, la cebolla y el repollo. Sigue mezclando muy bien hasta que los ingredientes se encuentren bien distribuidos por toda la mezcla.
        Ahora debes comenzar a calentar la plancha Takoyaki e ir añadiendo aceite de oliva o de girasol en cada uno de los huecos en los que colocaras un Takoyaki, para evitar que las bolitas queden pegadas y se rompan al despegarlas. 
        
        ',
        'img' : '../../../../assets/imagenes/Comida-Japonesa/tekoyaki.JPG',
        'pais' : 'japonesa',
    
},

{
    'nombre' : 'Tempura de camarones',
    'ingredientes1' : '
    500 gramos de camarón grande
    3/4 tazas de agua
    1 taza de harina para hornear
    1 cucharada de polvo para hornear
    1/4 cucharadas de sal
    ',
    'ingredientes2' : '
    1/4 tazas de caldo de pollo
    4 cucharadas de salsa de soya
    2 cucharadas de agua
    1 cucharada de vinagre de arroz
    2 cucharadas de azúcar
    ',
    'preparacion' : '
    Primero prepare los camarones. Remueva la piel pero deje las colas. Con un cuchillo corte una ligera apertura en la curvatura externa del camarón. Abra los camarones y retire la vena negra. Lave en agua fría.
    En una olla ponga a calentar el aceite vegetal.
    Mientras tanto en una olla pequeña combine el caldo de pollo, la salsa soya, las 2 cucharadas de agua, el vinagre, el azúcar y el jengibre y cocine hasta que hierva. Hierva por 2 minutos.
    Cuele la salsa y guarde para utilizar como salsa acompañante de los camarones.
    En un recipiente hondo mezcle el agua fría con la harina, el polvo para hornear y la sal. Con un tenedor mezcle bien.
    
    ',
    'img' : '../../../../assets/imagenes/Comida-Japonesa/tempura de camarones.JPG',
    'pais' : 'japonesa',

}, 
{
        'nombre' : 'Dorayaki',
        'ingredientes1' : '
        Huevos 2
        Azúcar 50 g
        Miel 15 ml
        Harina de repostería 85 g
        Sal una pizca
        Levadura química 2 ml
        ',
        'ingredientes2' : '
        Agua 40 ml
        Aceite de oliva virgen extra
        Anko o crema de chocolate para rellenar
        ',
        'preparacion' : '
        Disponer los huevos en un cuenco con el azúcar y la miel. Batir con una batidora de varillas hasta que doble o casi triplique su volumen, y tenga un color pálido y textura espesa. Tamizar encima la harina con la levadura y una pizca leve de sal. Mezclar con movimientos envolventes y suaves. Incorporar el agua y tapar.
        Dejar reposar al menos 15 minutos a temperatura ambiente. Preparar una plancha o buena sartén antiadherente engrasándola ligeramente con aceite de girasol o mantequilla fundida. Calentar a fuego medio y añadir cucharones de masa, dando forma circular con el dorso de una cuchara.
        Cocinar hasta que salgan burbujas, deslizar por abajo una espátula y dar la vuelta. Cocinar hasta que esté bien dorado y retirar. Continuar hasta terminar la masa. Untar la mitad de las tortitas con anko, chocolate o crema y formar los dorayakis uniendo con el resto.
        
        ',
        'img' : '../../../../assets/imagenes/Comida-Japonesa/dorayaki.JPG',
        'pais' : 'japonesa',
    
},
{
        'nombre' : 'Gyosa',
        'ingredientes1' : '
        1 paquete de pasta para Gyoza (50 piezas aprox.)
        400 g. de carne de cerdo picada
        150 g. de col china
        50 g. de cebolleta
        2 dientes de ajo picados
        1 cucharada de jengibre rallado
        1 cucharada de salsa de soja
        ',
        'ingredientes2' : '
        1 cucharada de salsa de soja
        1 cucharadita de sal
        1/2 cucharadita de azúcar
        1/2 cucharada de maicena
        un poco de aceite de sésamo
        ',
        'preparacion' : '
        Picamos la cebolleta y la col china. Las reservamos para luego.
        En un bol ponemos el cerdo picado, el ajo, el jengibre, las salsa de soja, la sal, el azúcar, la maicena, el aceite de sésamo y lo mezclamos todo bien hasta que quede pegajoso.
        Añadimos la cebolleta y la col china y lo volvemos a mezclar. Lo cubrimos con un film y lo dejamos en la nevera unos 20 minutos.
        Cogemos una pieza de pasta para Gyoza y en el centro ponemos una cucharadita de nuestro relleno.
        Mojamos con los dedos la parte exterior de la pasta, la doblemos por la mitad y vamos cerrándola con los dedos.
        Yo hago desde la mitad, 3 pliegues a cada lado, aunque también podéis empezar a plegar por un lado y terminar en el otro. Para terminar, presionamos un poco los pliegues para que no se abran.
        Mientras vamos haciendo el resto, las ponemos en un plato y las cubrimos con un trapo húmedo para que no se sequen.
        En una sartén extendemos un chorrito de aceite vegetal y ponemos nuestras gyozas. Cuando estén tostadas por la base, les añadimos un chorrito de aceite de sésamo y ponemos agua para cubrir bien todo el fondo. Yo además le añado a éste agua una cucharadita de maicena para que se forme una costra crujiente en la base.
        Tapamos la sartén y dejamos cocinar hasta que se evapore el agua, tardará entre 8 y 10 minutos.
        Una vez se ha evaporado el agua de la sartén, las gyozas quedarán tostadas y crujientes en la base y bien cocinadas pero más blanditas por arriba, las ponemos en un plato y ya están listas para comer, las acompañamos con nuestra salsa.
        En un bol pequeño mezclamos la salsa de soja, el vinagre de arroz y un poco de aceite de sésamo, removemos bien y ya está lista.
        
        ',
        'img' : '../../../../assets/imagenes/Comida-Japonesa/gyosa.JPG',
        'pais' : 'japonesa',
    
}



 */
{
  'nombre' : 'Carpaccio',
  'ingredientes1' : 'Solomillo de ternera Sal Pimienta Aceite de oliva virgen extra Alcaparras Queso Parmesano Mostaza en grano',
  'preparacion' :'Cogemos el solomillo y lo metemos durante 1 hora y pico en la nevera, que notemos que se empieza a congelar pero no llega a solidificarse del todo. Una vez pasado ese tiempo cortamos con un cuchillo afilado lonchas muy finas, lo más finas que podamos. Ponemos un chorrito de aceite de oliva en un plato y ponemos sal y pimienta. Cubrimos bien con las lonchas de carpaccio, aderezamos con sal, pimienta, unas alcaparras, la mostaza en grano y el queso Parmesano. Todo al gusto y en la cantidad que queramos. Servimos frío.',
  'img' : '../../../../assets/imagenes/Comida-italiana/sopa de misu.JPG',
  'pais' : 'italiana',

},
{
  'nombre' : 'Polenta',
  'ingredientes1' : '4 tazas de agua Sal, al gusto 1 taza de harina de maíz o polenta instantánea 1 cucharada de aceite de oliva o mantequilla (opcional) Queso parmesano rallado (opcional).',
  'preparacion' :'En una olla grande, lleve el agua y sal a hervir. Gradualmente añada la harina, removiendo constantemente. Baje la temperatura a baja y continúe removiendo por alrededor de 30 minutos para harina de maíz o 15 minutos para polenta instantánea. Para una polenta firme, vierta un poco en una bandeja para hornear y déjela enfriar, luego mantenga en el refrigerador antes de rebanar. Si usted sirve polenta suave, mezcle el aceite de oliva o mantequilla y parmesano, si lo usa y sirva dentro de 20 minutos.',
  'img' : '../../../../assets/imagenes/Comida-italiana/sopa de misu.JPG',
  'pais' : 'italiana',

} ,
{
  'nombre' : 'Pasta',
  'ingredientes1' : '350 gr Tallarines 3 jitomates 1 diente Ajo 2 1/4 Cebollas 3 cdas Aceite de Oliva',
  'preparacion' :'Cuece las pasta en agua con sal hasta que quede al dente. Escurre y reserva. Licúa los jitomates, el ajo y 1/4 de cebolla para hacer la salsa. Reserva. Parte las cebollas restantes por la mitad y córtalas en tiras. Calienta en un sartén el aceite, fríe el tocino y añade la cebolla y el ajo; sofríe todo hasta que se dore. Incorpora la salsa y deja cocer a fuego lento por 10 minutos. Agrega los tallarines. Mezcla todo y sirve espolvoreando parmesano y pimienta.',
  'img' : '../../../../assets/imagenes/Comida-italiana/sopa de misu.JPG',
  'pais' : 'italiana',

} ,
{
  'nombre' : 'Pizza',
  'ingredientes1' : 'Para la masa de cuatro pizzas individuales Harina 00, 500 g (*) Levadura fresca prensada de panadería, 2 g Agua a temperatura ambiente, 350 ml Aceite de oliva virgen extra, 20 g Miel, una cucharadita',
  'preparacion' :'En un bol, ponemos la mitad de agua y disolvemos la levadura prensada de panadería. En el bol de una amasadora tipo Kitchen Aid, ponemos la harina, la miel y el agua con la levadura que hemos disuelto. Ponemos a funcionar la máquina a velocidad media y, sin dejar de amasar, vamos añadiendo el resto del agua y la sal. Finalmente, añadimos el aceite poco a poco, dejándolo caer en forma de hilo mientras la máquina sigue amasando. Enharinamos ligeramente la mesa de trabajo, volcamos la masa, la tapamos y la dejamos reposar media hora. Pasado ese tiempo trabajamos la masa con las manos, plegándola una y otra vez sobre sí misma hasta formar una bola de masa lisa. Ponemos nuestra bola de masa en un bol limpio ligeramente engrasado y enharinado, lo tapamos con papel film y dejamos reposar durante unas ocho horas.',
  'img' : '../../../../assets/imagenes/Comida-italiana/sopa de misu.JPG',
  'pais' : 'italiana',

},
 {
  'nombre' : 'Rissoto',
  'ingredientes1' : '1 cucharada de aceite de oliva o mantequilla 1 cebolla mediana finamente cortada en cubitos 1 ½ taza de arroz Arborio 4 tazas de caldo pollo o verduras 1 cucharada de mantequilla dulce (opcional)',
  'preparacion': 'Coloque el caldo a ebullición sobre una llama alta. Gire la llama hacia abajo y deje a un lado en la parte posterior de la estufa. En un wok o horno holandés, calentar el aceite de oliva a fuego medio-alto. Añadir las cebollas y saltear hasta que sean suaves y transparentes, pero sin color unos 5 minutos. Agregue el arroz y cocine hasta que los granos se vuelvan transparentes en los bordes, aproximadamente 1 minuto. Añada un cucharón de caldo al arroz y cocine agitando hasta que haya sido absorbido. Continúe agregando el caldo, 1 cucharón a la vez, revolviendo todo el tiempo hasta que el arroz esté al dente y cremoso, alrededor de 15 a 20 minutos. Reserve la última cucharada. Agregue las verduras crudas, por ejemplo, espárragos, cuando el caldo esté casi evaporado o con el segundo al último cucharón si está cocido o congelado.',
  'img' : '../../../../assets/imagenes/Comida-italiana/sopa de misu.JPG',
  'pais' : 'italiana',

},
 {
  'nombre' : 'Spagetti',
  'ingredientes1' : '1 paquete de espagueti 1/4 de crema agria 1 taza de puré de jitomate 1/4 de mantequilla',
  'preparacion' :'Hierve 2 litros de agua y, cuando esté en su punto, agrega 2 cucharadas de sal. Posteriormente, cuece la pasta hasta que esté blanda. Retira del fuego, cuela la pasta y desecha el agua. Hierve el puré de jitomate a fuego lento y añade la crema, la mantequilla y el cubo sazonador. Vierte el espagueti en la salsa y mezcla. Sirve. Espolvorea con el queso parmesano al gusto.',
  'img' : '../../../../assets/imagenes/Comida-italiana/sopa de misu.JPG',
  'pais' : 'italiana',

},
{
  'nombre' : 'Mascarpone',
  'ingredientes1' : '5 yemas de huevo 1/2 tazas de azúcar glass, para las yemas 2 cucharadas de vino, dulce 1 ralladura de naranja 2 paquetes de queso mascarpone, (226 g c/u) batido previamente un poco, para que esté suave',
  'preparacion' :'Para la crema: bate las yemas con el azúcar, 2 cucharadas de vino dulce y la ralladura de naranja por 5 minutos, debes obtener una consistencia esponjosa y tersa. Luego mezcla de manera envolvente con el queso mascarpone y reserva. Aparte, bate las claras con la pizca de sal por 5 minutos, hasta que doblen su volumen (punto de turrón) y añádelas de forma envolvente a la mezcla de queso mascarpone. Reserva. Mezcla el café con el vino y reserva. Remoja las soletas en el café y acomódalas en un molde formando una base, para después cubrirla con la crema de mascarpone. Repite el proceso hasta llenar el molde, cubre por completo con crema y refrigera.',
  'img' : '../../../../assets/imagenes/Comida-italiana/sopa de misu.JPG',
  'pais' : 'italiana',

}
]);
  }
}



module.exports = RecetaSeeder
