"use strict"

/*
|--------------------------------------------------------------------------
| RecetaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import("@adonisjs/lucid/src/Factory")} */
const Factory = use("Factory")
const Database = use("Database")

class RecetaSeeder {
  static async run () {
    await Database.table("recetas").insert([
      /* {
        "nombre" : "Abalon En Lecho De Lechuga",
        "ingredientes1" : "1 lata de abalones 50 gr. de champiñones, 1 cogollo de lechuga, 2 cucharadas de aceite vegetales, 6 cebolletas pequeñas, 6 discos finos de jengibre",
        "ingredientes2" : "Para la salsa: 6 cucharadas de caldo de pescado 1 cucharada de salsa de ostras 1 cucharada de salsa de soya 1 cucharadita de maicena 1 cucharita de azúcar 1 cucharadita de aceite de sésamo",
        "preparacion" : "Cortaremos los champiñones por la mitad Blanquearemos la lechuga, escaldándola en agua hirviendo, durante 1 minuto, sacarla y escurrirla bien, poniéndola en el fondo de una fuente. En un wok, calentaremos las 2 cucharadas de aceite, una vez caliente saltearemos las cebolletas, cortadas bastamente, usando también parte de los tallos verdes, y el jengibre cortado en tiritas. Una vez salteada la verdura, añadiremos los abalones, cortados en discos finos, salteándolos un poco. Añadiremos todos los ingredientes de la salsa. Cuando la salsa engorde un poco, verteremos todo sobre el lecho de lechuga. Podemos emplear otras verduras de hojas verdes. En lugar de abalones, también podemos elaborar este plato, con el músculo blanco de las vieiras, al ser este músculo más tierno que el de los abalones, podemos ponerlo entero o cortado por la mitad.",
        "img" : "../../../../assets/imagenes/Comida-China/AbalonEnLechoDeLechuga.jpg",
        "pais" : "chinas",
    
},
{
        "nombre" : "Arroz Congee",
        "ingredientes1" : "180 g arroz basmati 2.25 l caldo de verduras Salsa de soja Aceite de sésamo",
        "ingredientes2" : ",
        "preparacion" : "En una olla grande, agregue el caldo o agua y el arroz. Cúbralo y cocínelo durante aproximadamente 1½ - 2 horas a fuego lento, hasta que el arroz y el agua hayan formado unas gachas. Las gachas se pueden consumir de forma líquida o más compacta, en cuyo caso, será necesario extender la cocción. Después de 2 horas, todavía queda algo de líquido, y las gachas siguen siendo bastante líquidas. Vierta las gachas en tazones. Sazone con salsa de soja y aceite de sésamo, si lo desea.",
        "img" : "../../../../assets/imagenes/Comida-China/chop suey.jpg",
        "pais" : "chinas",
    
},
{
        "nombre" : "Chow Mein",
        "ingredientes1" : "1 zucchini 1 cebolla 1/2 morrón rojo 1/2 morrón verde 2 dientes de ajo 1 cucharada de miel 3/4 taza de salsa de soja 1 paquete de fideos de arroz Sal y pimienta, a gusto Jengibre rallado, a gusto",
        "ingredientes2" : ",
        "preparacion" : "Hidratar o cocinar los fideos de arroz según indicaciones del paquete. Cortar los vegetales del tamaño deseado: cebollas en trozos, morrones en tiras, zucchinis irregulares. Saltear en un wok aceitado las verduras. Deben quedar crocantes. Sumar el jengibre rallado, la miel y la salsa de soja. Revolver y dejar reducir unos minutos. Sumar los fideos, revolver y servir.",
        "img" : "../../../../assets/imagenes/Comida-China/Chow mein.jpg",
        "pais" : "chinas",
    
},
{
        "nombre" : "Dim Sum",
        "ingredientes1" : "20 unidades de pasta wonton 200 g. de cerdo picado 200 g. de langostinos picados 2 setas shitake seso y hidratadas 5 g. de cebolletas (la parte verde) 1 cucharadita de jengibre rallado un poco de zanahoria para decorar",
        "ingredientes2" : "1/2 cucharada de maizena 1 cucharada de salsa de ostras 1/2 cucharada de salsa de soja ligera 1 pizca de pimienta blanca 1/2 cucharadita de aceite de sésamo 1/2 cucharadita de sal",
        "preparacion" : "Hidratar o cocinar los fideos de arroz según indicaciones del paquete. Cortar los vegetales del tamaño deseado: cebollas en trozos, morrones en tiras, zucchinis irregulares. Saltear en un wok aceitado las verduras. Deben quedar crocantes. Sumar el jengibre rallado, la miel y la salsa de soja. Revolver y dejar reducir unos minutos. Sumar los fideos, revolver y servir.",
        "img" : "../../../../assets/imagenes/Comida-China/dim  sum.jpg",
        "pais" : "chinas",
    
}, 
{
        "nombre" : "Ma Po Tofu",
        "ingredientes1" : "250 g de carne mixta picada 2 dientes de ajo 3 cucharaditas de fécula de patata 1 cucharada de salsa de ostras 1 cucharadita de aceite de sésamo 1 cucharada de salsa de soja Aceite de oliva 3 cucharaditas de pasta de guindilla picante",
        "ingredientes2" : "750 g de tofu firme 2 Cebolletas frescas 50 ml de caldo de pollo 1 cucharadita de cebollino picado 1 cucharada de ketchup Sal Ajinomoto Azúcar",
        "preparacion" : "En primer lugar, en un bol no metálico, ponemos la carne picada, y añadimos la salsa de ostras, la salsa de soja, una pizca de sal, azúcar, ajinomoto y el aceite de sésamo. Mezclamos con las manos y dejamos adobar 15 minutos en la nevera tapada con papel film. Mientras, troceamos el tofu en láminas de 1 dedo de grosor. Las cortamos en cuadrados de 1 dedo. Picamos el ajo y la cebolleta en brunoise. Reservamos. En un vaso disolvemos la fécula de patata en un poco de agua fría. Reservamos. En una sartén tipo wok ponemos un poco de aceite de oliva, y salteamos el ajo y la cebolleta hasta que estén dorados. Añadimos la carne adobada y la cocinamos. Incorporamos el caldo, la pasta de guindilla y la cucharada de ketchup, dejamos cocer un minuto y añadimos la fécula mezclada con agua para que espese la salsa. Incorporamos el tofu cortado en dados y cocemos durante 3 minutos más. Servimos en un plato hondo y decoramos con el cebollino picado.",
        "img" : "../../../../assets/imagenes/Comida-China/Ma po tofu.jpg",
        "pais" : "chinas",
    
},
{
        "nombre" : "Pato Laqueado a la Pekinesa",
        "ingredientes1" : "En primer lugar, en un bol no metálico, ponemos la carne picada, y añadimos la salsa de ostras, la salsa de soja, una pizca de sal, azúcar, ajinomoto y el aceite de sésamo. Mezclamos con las manos y dejamos adobar 15 minutos en la nevera tapada con papel film. Mientras, troceamos el tofu en láminas de 1 dedo de grosor. Las cortamos en cuadrados de 1 dedo. Picamos el ajo y la cebolleta en brunoise. Reservamos. En un vaso disolvemos la fécula de patata en un poco de agua fría. Reservamos. En una sartén tipo wok ponemos un poco de aceite de oliva, y salteamos el ajo y la cebolleta hasta que estén dorados. Añadimos la carne adobada y la cocinamos. Incorporamos el caldo, la pasta de guindilla y la cucharada de ketchup, dejamos cocer un minuto y añadimos la fécula mezclada con agua para que espese la salsa. Incorporamos el tofu cortado en dados y cocemos durante 3 minutos más. Servimos en un plato hondo y decoramos con el cebollino picado.",
        "ingredientes2" : "1 trozo de jengibre fresco Sal 2 cda salsa de soja 3 cda de miel ½ pepino ½ cebolleta Crepes chinas ",
        "preparacion" : "En una olla grande pones suficiente agua a hervir, escaldas el pato durante 1 min. Sacas el pato del agua y dejas enfriar. Despegas la piel del pato ayudándote con una pajita soplando entre la piel y la carne del ave. La piel debe quedar completamente despegada, sin perder su forma. Atraviesas el extremo del cuello del pato con un gancho de metal, para poder colgarlo. Pones debajo del pato una cacerola. Pelas y picas el jengibre tan pequeño como puedas, puedes rallarlo. En una olla viertes el agua e incorporas la miel, el jengibre picado, la salsa de soja, el anís estrellado, la canela china, las semillas de hinojo, el chile en polvo y el vino. Pones sobre el fuego y cuando empiece a hervir apagas el fuego. Cuando el líquido esté todavía muy caliente, lo viertes sobre el pato colgado y te aseguras que el pato quede bien bañado. Una vez que la piel esté bien empapada de la salsa,  el pato tendrá un color marrón chocolate. Cuelgas el pato laqueado de Pekín en un lugar seco y fresco y lo dejas durante 5 horas Pasadas estas horas de reposo, la piel del pato deberá apreciarse seca y firme al tacto. Colocas el pato sobre una rejilla, por debajo pones una fuente para horno con 2 vasos de agua. Horneas a 240°C durante 20 min. Pasado este tiempo, bajas la temperatura  a 180 °C durante 1 hora. Una vez que haya pasado este tiempo, ya puedes sacar tu pato laqueado de Pekín del horno. Cortas en bastones finitos la cebolleta y los colocas en un bol con agua durante 10 min. Después los pones sobre un papel absorbente de cocina. Igualmente cortas el pepino.",
        "img" : "../../../../assets/imagenes/Comida-China/Pato laqueado a la pekinesa.jpg",
        "pais" : "chinas",
    
},
{
        "nombre" : "Pollo Gong Bao",
        "ingredientes1" : "2 pechugas de pollo deshuesadas sin piel 1 cucharada de aceite de cacahuete 8 guindillas rojas secas 1 cucharada de granos de pimienta de Sichuan 2 dientes de ajo 3 o 4 rodajas de jengibre fresco 1 cucharada de cebolleta picada 100 gr. de cacahuetes tostados Para el adobo: 2 cucharadas de salsa de soja 1 cucharada de vino de arroz 1/2 cucharada de azúcar",
        "ingredientes2" : "Para la salsa: 1 cucharadita de salsa de soja clara 1 cucharadita de salsa de soja oscura 1 cucharadita de vinagre de arroz 1 cucharadita de aceite de sesamo 1 cucharadita de azúcar",
        "preparacion" : "Empezamos troceando las pechugas de pollo en taquitos de unos dos centímetros, y reservamos. En un bol, preparamos el adobo con; la salsa de soja, el vino de arroz y el azúcar. Lo batimos enérgicamente, y lo vertemos encima del pollo, ya cortado, y lo dejamos macerar una media hora. Mientras, hacemos la salsa, mezclando todos los ingredientes, y reservamos. Echamos en un wok el aceite de cacahuete y, cuando esté bien caliente, añadimos las guindillas en dos trozos, junto con los granos de pimienta de Sichuan. Lo dejamos hasta que desprendan su aroma y añadimos los daditos de pollo escurridos. Cuando el pollo empiece a coger su color blanco, le añadimos las rodajitas de jengibre fresco, los dientes de ajo laminados y la cebolleta picada. Lo dejamos hacer dos o tres minutos removiéndolo continuamente. Pasado ese tiempo, le añadimos la salsa que tenemos reservada y lo removemos bien con el fin de que nos quede todo bien mezclado, añadimos los cacahuetes, volvemos a remover y listo… Servir bien caliente.",
        "img" : "../../../../assets/imagenes/Comida-China/pollo gong bao.jpg",
        "pais" : "chinas",
    
},
{
        "nombre" : "Rollitos Primavera",
        "ingredientes1" : "200 g. carne de ternera picada 2 zanahorias 1 cebolla 200 g. col china o repollo 100 g. brotes de soja ½ pimiento rojo", 
        "ingredientes2" : " 8 hojas de masa filo Salsa de soja Aceite de sésamo Aceite de girasol para freír",
        "preparacion" : "Cortamos las verduras en juliana y reservamos. En un wok, o en una sartén si no tuvierais, añadimos 3 cucharadas de aceite para freír. Cuando esté bien caliente agregamos la col y la cebolla. Rehogamos removiendo constantemente hasta que la verdura esté al dente. No debe quedar muy pochadita sino un poquito crujiente. Cuando esté casi lista añadimos al wok una cucharada de salsa de soja y unas gotitas de aceite de sésamo. Removemos unos segundos y retiramos. En el mismo wok volvemos a añadir un par de cucharadas de aceite para freír. Cuando esté caliente añadimos la zanahoria ya troceada y repetimos la operación. La cocinamos removiendo constantemente hasta que esté al dente, añadimos una cucharada de soja y un chorrito de aceite de sésamo, removemos y retiramos. Seguimos el mismo proceso con el pimiento en juliana y reservamos. Volvemos a engrasar el wok y esta vez incorporamos la carne picada. Podríamos sustituir la carne de ternera por cerdo o pollo sin problema, incluso eliminarla totalmente y convertir los rollitos en sólo vegetales. Dejamos que se cocina la carne a fuego alto hasta que comience a dorarse. Agregamos los brotes de soja, dos cucharadas de salsa de soja y un chorrito de aceite de sésamo y seguimos cocinando durante 1 o 2 minutos. Añadimos al wok el resto de verduras que tenemos reservadas y dejamos 2 minutos que se mezclen los sabores. Retiramos del fuego y reservamos hasta que se temple. Estiramos una hoja de pasta filo en una superficie de trabajo y colocamos una porción del relleno intentando reducir al máximo la cantidad de salsa. Si la mezcla está muy húmeda podría romperse la fina hoja de pasta filo. Enrolamos haciendo un rollo utilizando toda la hoja y freímos en abundante aceite. Estará listo en apenas 1 o 2 minutos. Retiramos a una bandeja con papel absorbente y servimos caliente.",
        "img" : "../../../../assets/imagenes/Comida-China/rollitos primavera.jpg",
        "pais" : "chinas",
    
},
{
        "nombre" : "Shrimp Chow",
        "ingredientes1" : "Aceite Fideos Verduras Camarones Salsa",
        "ingredientes2" : ",
        "preparacion" : "Cocine los camarones : Caliente el aceite a fuego alto y mezcle los camarones alrededor de la sartén hasta que estén cocidos. Transfiera a un plato aparte. Cocine las cebollas : En las cebollas restantes, dore las cebollas. Agregue las verduras restantes : Una vez que las cebollas se doren bien, agregue el apio y el repollo. Una vez que comiencen a dorarse y se pongan blandas, agregue el ajo y el jengibre. Prepare los fideos : Mientras se cocinan las verduras, rompa los fideos con agua corriente o en un recipiente con agua tibia. Cocine los fideos : Con las verduras transferidas a un plato aparte, agregue el aceite de sésamo a la caminata caliente junto con los fideos. Asegúrese de dejar que se cocinen, sin que los moleste, para que se doren bien en el fondo antes de tirar. Termina el Chow Mein de Camarones : Agrega los camarones cocidos y las verduras al wok con los fideos. Agregue la salsa de ostras y la salsa de soja y luego mezcle para combinar",
        "img" : "../../../../assets/imagenes/Comida-China/shrimp chow.jpg",
        "pais" : "chinas",
    
},
{
        "nombre" : "Siew Yhok",
        "ingredientes1" : "1 kilo de lomo de cerdo 2 cucharadas de miel 4 cucharadas de salsa de soya 1 cucharada de vino blanco (puede ser jerez)",
        "ingredientes2" : "6 cucharadas de azúcar Sal Salsa Hoisin: 50 centímetros cúbicos de salsa de soya ½ cucharadita de maicena ½ cucharadita de miel 25 mililitros de vinagre blanco o de arroz ¼ cucharadita de ajo en polvo 25 centímetros cúbicos de aceite de sésamo (puede ser algún aceite vegetal) Una pizca de salsa picante (a gusto) 50 centímetros cúbicos de agua mineral. ",
        "preparacion" : "Lavamos bien la carne y la cortamos en 4 tiras a lo largo. Hacemos unos cortes, 4 más precisamente en diagonal, sin separar las tiras para que de esta forma el adobo humecte y penetre mucho más en la carne. Seguimos, y mezclamos todos los ingredientes menos la miel. Añadimos las tiras de la carne del cerdo y con el líquido las cubrimos muy bien mientras las pinchamos con la ayuda de un palillo o tenedor para que penetre mejor. Dejamos esta mezcla a una temperatura ambiente por un espacio de 4-5 horas y en tanto va pasando el tiempo las vanos dando vuelta cada 30 minutos. Una vez que pasaron las 5 horas, llevamos la preparacion a un horno precalentado previamente y a una temperatura de 190º C. Cuando la carne ya está bien caliente, se escurren las tiras de cerdo y se deja a un lado el adobo. En tanto, en la parte inferior del mismo ponemos una rustidera con unos 2 cm de agua y dejamos en el horno cocinando o calentando por aproximadamente una media hora. Pasado este tiempo la carne ya estará bien tostada con un color algo marrón o rojizo. Se quita la rejilla del horno, y se pasa la carne por el adobo volviéndola a poner una vez más en el horno pero del otro lado. Horneamos otra media hora para que quede parejo de ambos lados. Una vez listas las tiras, las pasamos a otra rejilla pero fría. De inmediato las untamos. No olviden que la carne debe estar muy pero muy caliente y con miel por todos lados aun en el interior de los cortes. En una cacerola pequeña hacemos hervir a fuego mediano el líquido de la maceración que habíamos dejado reservado para así lograr obtener una rica salsa. Cuando ya está lista, se la coloca en una salsera caliente.  Por último, trinchamos la carne y las presentamos en forma de tiras cubiertas con la salsa. Además pueden adornar este maravilloso y asombroso plato con unas ricas verduras crudas. ",
        "img" : "../../../../assets/imagenes/Comida-China/siew yhok.jpg",
        "pais" : "chinas",
    
},
{
        "nombre" : "Szechwan Chicken",
        "ingredientes1" : " 1/4 taza de aceite vegetal 1 libra de pechugas de pollo deshuesadas y sin piel cortadas en trozos de 1 pulgada 1/4 taza de maicena 1/2 taza de cebolla amarilla cortada en trozos de 1/2 pulgada 1 pimiento rojo cortado en trozos de 1 pulgada 1 pimiento verde cortado en trozos de 1 pulgada 25 chiles rojos secos pequeños 1 cucharada de granos de pimienta de sichuan opcional 1 1/2 cucharaditas de ajo picado",
        "ingredientes2" : "1 cucharadita de jengibre picado sal y pimienta para probar Para la salsa 3 cucharadas de salsa de soja baja en sodio 1 1/2 cucharadas de salsa hoisin 1 cucharada de aceite de sésamo 1 1/2 cucharadas de azúcar morena 1 cucharada de maicena 1/4 taza de caldo de pollo",
        "preparacion" : "Coloca el pollo en un bol con la maicena y sal y pimienta al gusto. Mezcle para combinar. Calentar el aceite vegetal en una sartén grande a fuego alto. Coloque el pollo en una sola capa en la sartén. Cocine durante 3-4 minutos por lado hasta que se doren. Es posible que deba realizar este paso por lotes. Retire el pollo de la sartén. Cubra para mantener el calor. Agregue la cebolla y los pimientos rojos y verdes a la sartén. Agregue los chiles y los granos de pimienta de Sichuan. Cocine durante 3-4 minutos o hasta que las verduras se ablanden. Agrega el ajo y el jengibre a la sartén; cocine por 30 segundos más. Regrese el pollo a la sartén con las verduras. Mientras se cocinan el pollo y las verduras, prepare la salsa. Batir todos los ingredientes de la salsa en un tazón pequeño. Agregue la salsa a la mezcla de pollo y deje hervir; cocine de 30 segundos a 1 minuto, o hasta que la salsa esté espesa. Servir inmediatamente.",
        "img" : "../../../../assets/imagenes/Comida-China/szechwan chicken.jpg",
        "pais" : "chinas",
    
},
{
        "nombre" : "Ajiaco",
        "ingredientes1" : "8 tazas de agua 4 pechugas medianas de pollo, sin piel y sin hueso 1 taza de guascas secas (Colombian plant) 2 lbs de papa criolla (yukon gold) 2 lbs de papa sabanera (white potatoes) 1 cebolla mediana picada 2 dientes de ajo picados 4 mazorcas grandes de maíz",
        "ingredientes2" : "1 cubo de caldo de gallina (pollo) 1/2 taza de arvejas o chícharos verdes (peas) Sal al gusto",
        "preparacion" : "En una olla grande agrega el agua, el pollo y la mitad de las guascas. Déjalo cocinar por aproximadamente 40 minutos. Cuando ya el pollo este cocido lo sacas de la olla y lo colocas en un plato aparte; córtalo en trocitos y cúbrelo con papel aluminio para mantenerlo tibio. No tires el agua. Luego en la misma agua en que cocinaste el pollo debes agregar las dos clases de papa, la cebolla y el ajo. Deja cocinar por aproximadamente 2 horas para que la papa criolla se disuelva completamente. Agrega el pollo cortado en trocitos, las mazorcas, el caldo de gallina, las arvejas verdes (chícharos) y la sal a tu gusto. Mezcla con cuidado todos los ingredientes y déjalos cocinar por una hora más a fuego medio bajo. Agrega la mitad restante de las guascas y cocina por 5 minutos más.",
        "img" : "../../../../assets/imagenes/Comida-colombianas/Ajiaco.jpg",
        "pais" : "colombianas",
    
},
{
        "nombre" : "Wonton",
        "ingredientes1" : "
        300 g. harina de trigo
        50 ml. de agua (si usáis huevos de tamaño normal, podéis añadir de 1/2 a 1 cucharada más de agua)
        2 huevos (yo utilizo tamaño XL)
        1 cucharadita sal",
        "ingredientes2" : ",
        "preparacion" : "
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
        ",
        "img" : "../../../../assets/imagenes/Comida-China/wonton.jpg",
        "pais" : "chinas",
    
},
{
        "nombre" : "Zongzi",
        "ingredientes1" : "
        Arroz glutinoso redondo: 1.5 kg – 2 kg.
        Hojas de bambú disecado: 50 hojas.
        Hongos shitake mini disecado.
        Bondiola estofada: 1 kg.
        Salsa de soja: 50 ml.
        Aceite de girasol: 30 ml.
        Maní con piel: 300 g.
        Hilo de matambre.",
        "ingredientes2" : ",
        "preparacion" : "
        Para realizar este plato tardaremos 3 días. Durante 48-72 horas tendremos que dejar las hojas de bambú en remojo.
        El segundo día procederemos a cocinar la bondiola estofada, dejándola reposar en una heladera durante unas 24 horas. Es imprescindible que la carne esté completamente tierna.
        Debemos además lavar el arroz con mucha agua y ponerlo en remojo durante 24 horas también. Asimismo, tanto los maníes como los hongos de shitake deberán estar en remojo el mismo tiempo.
        El tercer día procederemos a lavar bien las hojas de bambú y las escurriremos correctamente. También escurriremos los hongos y el resto de alimentos.
        Salteamos el arroz con un poco de aceite y salsa de soja y le añadimos un poquito de sal al gusto.
        Debemos cortar los hilos con una longitud de unos 60 cm- 100 cm. Usaremos 2 hojas de bambú para formar con ellas un cono, las rellenamos de arroz, carne, hongos y arroz y lo cerramos. Acto seguido intentamos armar un tamal con 4 ángulos y lo atamos con el hilo.
        Tras esto, debemos cocinarlos en agua o al vapor durante aproximadamente 1 hora o 1 hora y media.",
        "img" : "../../../../assets/imagenes/Comida-China/zongzi.jpg",
        "pais" : "chinas",
    
},
{
        "nombre" : "Arepas",
        "ingredientes1" : "175 gr de harina de maíz precocida blanca (marca PAN) 270 ml de agua 1/2 cucharada sopera de sal",
        "ingredientes2" : ",
        "preparacion" : "En un bol añade el agua y diluye la sal. Echa la harina de maíz precocida y mezcla muy bien hasta que se integren todos los ingredientes. Amasa durante unos minutos hasta obtener una mezcla compacta. Toma porciones de masa de unos 100 gr y haz primero una bola y luego aplástala ligeramente para que quede un panecillo de 1,5 cm de grosor, aproximadamente. Pon a calentar una sartén donde quepan bien las arepas o una plancha y engrásala con un poquito de aceite de oliva o de girasol. Cuando la sartén esté caliente, coloca las arepas y cocínalas, aproximadamente, durante 5 minutos por cada lado a fuego medio – alto. Deben dorarse por fuera y cocinarse por dentro, puedes comprobar cómo está abriéndola por la mitad para cerciorarte que la arepa está bien cocida. Y ya tienes unas deliciosas arepas caseras listas para rellenar con tus ingredientes favoritos.",
        "img" : "../../../../assets/imagenes/Comida-colombianas/arepas.jpg",
        "pais" : "colombianas",
    
},
{
        "nombre" : "Arroz con coco ",
        "ingredientes1" : "1 lata de agua de coco 1/2 cucharadita de sal 1 taza de arroz de grano mediano 2/3 taza de leche evaporada Ralladura de limón verde",
        "ingredientes2" : ",
        "preparacion" : "Haz hervir el agua de coco en una cacerola mediana a fuego medio. Agrega la sal y el arroz. Reduce el fuego a medio-bajo; pon la tapa. Cocina esto, revolviéndolo de vez en cuando, de 12 a 15 minutos hasta que el agua esté a punto de ser absorbida por completo. Agrega la leche evaporada. Pon la tapa y cocina el conjunto, revolviéndolo de vez en cuando, de 10 a 15 minutos más o hasta que el arroz esté tierno. Puedes agregar más agua en caso de que sea necesaria para conseguir que el arroz tenga la textura necesaria. Retira la cacerola del fuego. Incorpora, al gusto, la ralladura de limón verde, de así desearlo.",
        "img" : "../../../../assets/imagenes/Comida-colombianas/arroz con coco.jpg",
        "pais" : "colombianas",
    
},
{
        "nombre" : "Bollo limpio ",
        "ingredientes1" : "1 ½ kg de maíz pilado Sal Hojas de mazorca grandes Cabuya",
        "ingredientes2" : ",
        "preparacion" : "Poner a remojar el maíz desde víspera y limpiarlo de impurezas. Botar el agua y cocinar el maíz en agua fresca durante 30 minutos, dejar enfriar. Escurrir el agua, moler el maíz y amasarlo con un poco de sal hasta obtener una pasta suave. Lavar las hojas de mazorca y poner 3 cucharadas de masa en cada una, cubrirla con otra hoja y envolver bien, doblar los extremos y amarrar. Cocinar en agua hirviendo con un poquito de sal durante 30 minutos.",
        "img" : "../../../../assets/imagenes/Comida-colombianas/bollo limpio.jpg",
        "pais" : "colombianas",
    
},
{
        "nombre" : "Carimañola ",
        "ingredientes1" : "1 kilo yuca al gusto sal 500 gr carne molida 2 cebollas grandes picada 1 zanahoria rallada 4 dientes ajo orégano seco",
        "ingredientes2" : "pimienta picante molida de la negra 2 cdas vinagre 4 cdas salsa soya 1 cubo caldo de res",
        "preparacion" : "Poner a sancochar la yuca en abunda te agua con bastante sal, esperar hasta que esté semi blanda. sacar y dejar enfriar. Luego pasarla por un molino. Amasarla Para la carne sofreír la cebolla picada con la zanahoria rallada el ajo, el orégano Luego agregar la carne molida, el vinagre, la salsa soya, el cubo de caldo de res la pimienta, la sal y tapar, dejar cocinar a juego lento Destapar revisar la sazón y esperar a a que seque con esto rellenaremos las empanadas de yuca. Armar las empanadas. Sofreír en abundante aceite. Y listo. ",
        "img" : "../../../../assets/imagenes/Comida-colombianas/carimañola.jpg",
        "pais" : "colombianas",
    
},
{
        "nombre" : "Changua",
        "ingredientes1" : "1 taza de agua 3 cebollas verdes, picadas 2 tazas de leche Sal, al gusto 2 huevos 2 tajadas de pan blanco, cortado en cubos 2 cucharadas de cilantro fresco, picado",
        "ingredientes2" : ",
        "preparacion" : "Pon a calentar el agua en una olla o cazuela de barro a fuego medio. Agrégale la cebolla verde y déjala cocinar durante 2 minutos. Agrega la leche y la sal. Reduce la temperatura y agrega los huevos. Cocina por 2 minutos o hasta que los huevos estén cocinados. Agrega los trozos de pan sobre la changua y decora con el cilantro picado.",
        "img" : "../../../../assets/imagenes/Comida-colombianas/changua.jpg",
        "pais" : "colombianas",
    
},
{
        "nombre" : " Cuchuco",
        "ingredientes1" : "Una taza de cuchuco de trigo 2 libras de espinazo de cerdo 14 tazas de agua Una taza de arveja verde 3 dientes de ajo machacados Una ramita de cilantro 3 tallos de cebolla larga 8 papas criollas pequeñas sin pelar Una taza de fríjoles",
        "ingredientes2" : "Una taza de zanahoria picada en cuadritos 4 papas sabaneras peladas y finamente picadas 5 hojas de repollo troceadas Una taza de habas Sal Pimienta",
        "preparacion" : "En una olla grande, cocine el espinazo en el agua junto con la cebolla larga, el cilantro y los ajos. Deje hervir a fuego lento durante 45 minutos o hasta que el espinazo esté tierno. Agregue el cuchuco y deje hervir durante 10 o 15 minutos más. Luego, incorpore la papa sabanera, la zanahoria, las arvejas, las habas, los fríjoles y deje cocinar hasta que el cuchuco comience a espesar. Posteriormente, adicione la papa criolla, el repollo y la sal. Cocine a fuego lento durante 20 minutos más revolviendo reiteradamente. En un plato hondo, sirva primero el espinazo y luego vierta la sopa. Decore con cilantro finamente picado. ",
        "img" : "../../../../assets/imagenes/Comida-colombianas/cuchuco.jpg",
        "pais" : "colombianas",
    
},
{
        "nombre" : "Fritanga",
        "ingredientes1" : "
        5 vainas medianas de ají colorado o
        3 cucharas de ají colorado molido
        2 cucharillas de pimienta entera
        2 cucharillas de comino entero
        4 dientes de ajo
        3 Kg. carne de cerdo (preferentemente pierna)
        8 papas blancas peladas",
        "ingredientes2" : "1½ Lb pataska cocida
        1 Lb maíz pelado no cocido
        sal
        aceite",
        "preparacion" : "
        Una noche antes remojar el maíz PELADO seco en bastante agua, al día siguiente darle una lavada y ponerle a cocer con sal muy poco  hasta que el maíz se revienten.
        En un batán de piedra moler la pimienta, el comino y los ajos y separarlo. para darle un poco de sabor K’aspalo los AJIS,  pasando por el fuego de la cocina y también mole bien fino.
        Cortar el cerdo (chancho) en trozos pequeños y lávalos, y  hacerles cocer por lo menos unas 2 horas con bastante agua y sal a gusto y agrégalo los condimentos que moliste en el batan y sal a gusto.
        Saca el cerdo y en un sartén con aceite, freír de ambos lados todos los pedazos .
        Mientra tanto en otra olla  con 3 cucharadas de aceite,  hacer cocer el ají colorado durante diez minutos removiendo constantemente para que no se pegue, en unos 10 minutos ya cocerá el ají y  hecha  un cucharón de caldo del chancho.
        A esta preparacion de la nueva olla añadir los trozos de cerdo y dejar cocer a fuego lento durante 30 minutos, para que el sabor del aji entre a la carne.
        No dejes que se seque, sigue echando el caldo con los ingredientes.
        Servir en un plato el mote  y luego colocar pedazos de cerdo  y rociarlo con el ají colorado, acompañando con pataska o chuño  o al final o dos papas.
        ",
        "img" : "../../../../assets/imagenes/Comida-colombianas/fritanga.jpg",
        "pais" : "colombinas",
    
},
{
        "nombre" : "Obleas ",
        "ingredientes1" : "
        ½ litro de agua 
        1 cucharada de azúcar
        1 cucharada de aceite
        1 cucharadita de bicarbonato de sodio
        ½ cucharada de maicena
        250 g de harina de trigo",
        "ingredientes2" : ",
        "preparacion" : "
        Colocar en un recipiente profundo el agua e ir añadiendo el azúcar, el aceite, el bicarbonato y la maicena.
        Mezclar bien con una varillas, hasta que el azúcar se disuelva
        Añadir la harina de trigo poco a poco e ir batiendo suavemente para que no se formen grumos; debe quedar una mezcla suave, pero no muy líquida.
        Encender la máquina de hacer obleas y aceitarla para que no se pegue la mezcla, dejarla encendida unos 5 minutos para que se caliente bien.
        Colocar en la plancha una cucharada de la mezcla y bajar la tapa para que se distribuya en toda la superficie.
        Dejar que se cocine por 50 segundos a 1 minuto; levantar la tapa y despegar; repetir la operación hasta que se acabe la mezcla.
        ",
        "img" : "../../../../assets/imagenes/Comida-colombianas/obleas.jpg",
        "pais" : "colombinas",
    
},
{
        "nombre" : " Pan de bono",
        "ingredientes1" : "
        2 tazas de almidón o harina de yuca
        2 cucharadas de harina de maíz
        Sal (una cucharadita)
        Polvo para hornear (una cucharadita)
        2 cucharadas de azúcar
        200 gr de queso rallado",
        "ingredientes2" : "
        ½ taza (50 gr) de queso feta rallado
        3 cucharadas de mantequilla
        1 huevo",
        "preparacion" : "
        Precalienta el horno (425ºF - 220ºC).
        Agrega (procesador de alimentos) el almidón de yuca, la harina de maíz, polvo para hornear, azúcar, y sal.
        Procede a mezclar la mantequilla, el huevo, el queso fresco, y el queso feta.
        Luego agrega la leche (no toda de inmediato, poco a poco) hasta que la masa quede suave.
        Ahora vas a hacer con la masa círculos, del tamaño que quieras y las vas a ubicar en un molde sobre papel mantequilla .
        Lleva los pandebonos al horno y déjalos cocinar durante 25 minutos. Revisa continuamente para que no se vayan a quemar. 
        La clave es que tengan un color dorado intenso.
        
        ",
        "img" : "../../../../assets/imagenes/Comida-colombianas/pan de bono.jpg",
        "pais" : "colombinas",
    
},
{
        "nombre" : "Pan de yuca",
        "ingredientes1" : "
        50 ml cúbicos de leche
        50 ml de aceite de maíz
        25 ml de agua
        2 huevos
        100 gramos de almidón de yuca
        100 gramos de queso semiduro",
        "ingredientes2" : ",
        "preparacion" : "
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
        
        ",
        "img" : "../../../../assets/imagenes/Comida-colombianas/pan de yuca.jpg",
        "pais" : "colombinas",
    
},
{
        "nombre" : "Rondon ",
        "ingredientes1" : "
        1 kg de pescado
        300 gr de yuca
        200 gr de ñame
        2 plátanos verdes
        2 cebollas
        2 chiles dulces
        1 chile habanero
       ",
        "ingredientes2" : "
        1 cabeza de ajo
        1 raíz de jenjibre
        Hojas de laurel
        1 chile picante entero
        1 cucharadita de curry
        Sal y pimienta al gusto",
        "preparacion" : "
        Pele y corte en trozos el ñame, la yuca y los plátanos verdes. Reserve.
        En una olla, ponga a cocinar el pescado en agua con cebolla, chile dulce y el ajo. Agregue sal, jengibre y laurel. Luego de hervir por unos minutos, retire el pescado y cuele el caldo.
        En una olla ponga a hervir la leche de coco con el caldo de pescado y agregue la yuca, el ñame y el plátano. Deje ablandar un poco y luego incorpore el pescado y el chile habanero.
        Rectifique el sabor y cocine unos 10 minutos.
        Sirva y disfrute.
        ",
        "img" : "../../../../assets/imagenes/Comida-colombianas/rondon.jpg",
        "pais" : "colombinas",
    
},
{
        "nombre" : "Sancocho",
        "ingredientes1" : "
        1 libra de carne de res para guisar, picada en cubitos de 1 pulgada
        8 tazas de agua
        1 cebolla grande picada finamente
        2 dientes de ajo triturados
        1 pimiento verde picado finamente
        4 ajíes dulces picados finamente",
        "ingredientes2" : "
        ½ libra de calabaza picada en cubos de 1 pulgada
        ½ libra de yautía picada en cubos de 1 pulgada
        ½ libra de papas, picadas por la mitad
        ½ libra de batata blanca picado en cubos de 1 pulgada
        1 plátano verde picado en rodajas de ½ pulgada
        1 plátano maduro picado en rodajas de ½ pulgada",
        "preparacion" : "
        Combina todos los ingredientes para el caldo en una olla. Tapa y cocina a fuego alto hasta que hierva. 
        Luego baja a fuego mediano-bajo y cocina hasta que la carne esté tierna, más o menos unos 45 minutos.
        Añade todos los vegetales cortados en la olla con la carne, teniendo cuidado de no quemarte. Cocina a fuego mediano-alto hasta que los vegetales estén cocidos.
        Prueba el sancocho y ajusta la sal, si gustas. El sancocho estará listo cuando todos los vegetales estén tiernos y el caldo espese un poco.
        Sirve con una lasca de aguacate. Lo puedes acompañar con arroz o pan.
        ",
        "img" : "../../../../assets/imagenes/Comida-colombianas/sancocho.jpg",
        "pais" : "colombinas",
    
},
{
        "nombre" : " Sudado de pollo",
        "ingredientes1" : "
        8 muslos de pollo sin la piel
        1 cucharada de aceite vegetal
        ½ taza de cebolla picada
        ½ de taza de pimientón rojo picado
        1 diente de ajo picado
        2 tazas de tomate picado
        1 cucharada de Sazuón con azafran
        ½ cucharadita de comino en polvo",
        "ingredientes2" : "
        ½ de taza de cilantro fresco picado
        ½ de cucharadita de sal
        ½ cucharadita de pimienta
        8 papas pequeuñas amarillas peladas y cortadas por la mitad
        3 tazas de caldo de pollo",
        "preparacion" : "
        En una olla grande, caliente el aceite vegetal a fuego medio.
        Añadir la cebolla y el pimiento rojo y saltee hasta que las cebollas estén transparentes, unos 3 minutos.
        A continuaciuón, auñadir los tomates, el ajo, la sal y la pimienta molida y sofría por 5 minutos muás.
        Agregue el pollo, el caldo de pollo, la sazuón y comino en polvo.
        Tapar y cocinar durante 25 minutos, revolviendo ocasionalmente.
        Añadir las papas y el cilantro y cocine por 30 minutos muás o hasta que las papas estén tiernas. 
        Sirva sobre arroz blanco.
        ",
        "img" : "../../../../assets/imagenes/Comida-colombianas/sudado de pollo.jpg",
        "pais" : "colombinas",
    
},
 {
        "nombre" : " Bacalao a la vizcaina",
        "ingredientes1" : "1 kg Bacalao 2 lt Agua tibia 1/2 Cebolla, finamente picada 6 Dientes de ajo, finamente picados 6 jitomates, sin semillas y en cubos chicos 2 tazas Puré de tomate 3/4 taza Aceite de Oliva 3 tazas Papas, en cubos y cocidas", "ingredientes2" : " 150 g Almendra, peladas y picadas 200 g Aceitunas verdes, sin hueso y picadas 1/2 taza Perejil picado 1 taza Chile güero en lata Sal y pimienta al gusto",
        "preparacion" : "Coloca el bacalao en un refractario y cubre con agua tibia. Deja reposar por 2 noches antes de la preparacion. Cambia el agua cada 6 horas. Escurre y desmenuza, retira las espinas. Reserva.. Calienta el aceite y acitrona la cebolla y el ajo. Agrega el jitomate y mezcla. Cocina por 10 minutos o hasta que suelte sus jugos. Añade las papas y mezcla. Vierte el puré de tomate y mezcla. Cocina por 10 minutos. Agrega el bacalao, las aceitunas y las almendras. Tapa y cocina por 25 minutos. Mueve ocasionalmente. Agrega el perejil y mezcla. Sazona y mezcla. Cocina por 10 minutos más y sirve. Acompaña con los chiles güeros y pan.",
        "img" : "../../../../assets/imagenes/Comida-Española/bacalao a la vizcaina.jpg",
        "pais" : "españolas",
    
},
{
        "nombre" : " ",
        "ingredientes1" : "600 g de boquerones frescos limpios Harina Aceite de oliva virgen extra 1 limón Sal",
        "ingredientes2" : ",
        "preparacion" : "Sala los boquerones. Dispón un plato con harina y reboza los boquerones por ambos lados. Pon una sartén al fuego con abundante aceite de oliva para freír los boquerones. Antes de añadirlos a la sartén, sacúdelos un poco para que suelten el exceso de harina y el rebozado quede más fino. Fríe los boquerones en tandas durante 3-4 minutos. Al retirarlos, déjalos sobre papel absorbente para eliminar el exceso de aceite. Sírvelos con unas rodajas de limón para decorar y también para poder añadirles unas gotitas de zumo al degustarlos.",
        "img" : "../../../../assets/imagenes/Comida-Española/boquerones fritos.jpg",
        "pais" : "españolas",
    
},
{
        "nombre" : "Chipirones ",
        "ingredientes1" : "1 kg de chipirones (limpios) 2 cebollas grandes 2 dientes de ajo 1 vasito de coñac sal perejil picado",
       "ingredientes2" : ",
        "preparacion" : "Tiramos de los tentáculos con cuidado, introduciendo un dedo dentro del chipirón, para poder retirar también con un solo movimiento todos los interiores. Abrimos los tentáculos y tiramos de la boca para retirarla. Luego haciendo presión con dos dedos en la zona en donde se unen los interiores a los tentáculos, con la otra mano tiramos de los tentáculos para separarlos. También cortamos las aletas y las picamos. Retiramos la pluma, que es la piel transparente que queda en el interior del chipirón. Damos vuelta el chipirón, como si fuera un calcetín, para limpiarlo por dentro de cualquier resto de arena. Si son pequeños podemos solo meter un dedo dentro para limpiarlos, sin darlos vuelta. Secamos con papel absorbente para eliminar el exceso de agua.",
        "img" : "../../../../assets/imagenes/Comida-Española/chipirones.jpg",
        "pais" : "españolas",
    
},
{
        "nombre" : "Chorizo a la sidra ",
        "ingredientes1" : "Chorizo fresco 1 kg Sidra de manzana natural 250 ml Patata cocida para acompañar (opcional)",
        "ingredientes2" : ",
        "preparacion" : "Sacamos la cuerda a los chorizos y los colocamos en una cazuela con fondo. Los pinchamos con la punta de un cuchillo para que no revienten y suelten parte del jugo durante la cocción. Echamos por encima la sidra y ponemos a fuego alto. Cuando empiece a hervir dejamos a fuego vivo durante cinco minutos, lo bajamos y terminamos la cocción. El tiempo dependerá de la frescura, tamaño y calidad del chorizo, pero en unos 15 ó 20 minutos estarán, cuando el alcohol se haya evaporado y reducido el líquido, quedando una salsita en el fondo de la cazuela. Servimos inmediatamente.",
        "img" : "../../../../assets/imagenes/Comida-Española/chorizo a la sidra.jpg",
        "pais" : "españolas",
    
},
{
        "nombre" : "Cocido marileño",
        "ingredientes1" : "Suficiente de agua 1 taza de gallina 1 taza de tocino 1 taza de jamón serrano, en punta 2 tazas de tuétano 1 1/2 tazas de garbanzo, remojados y limpios 2 zanahorias 1 nabo",
        "ingredientes2" : "4 papas Sal al gusto 1/2 tazas de fideo, cabellín 1 taza de col 1/2 tazas de chorizo 1/2 tazas de morcilla de arroz",
        "preparacion" : "En una olla con agua cocina las carnes, la punta de jamón y los huesos; cuando empiece a hervir agrega los garbanzos; al segundo hervor, agrega la zanahoria, el nabo y cocina por 1 hora. Añade la papa y cocina por aproximadamente 1 horas más o hasta que todos los ingredientes estén suaves. Sazona con sal. Cuela y con el mismo, caldo cocina los fideos. Reserva. En una ollita hierve la col. Escurre y reserva. En una sartén cocina el chorizo y la morcilla. Sirve el caldo con los fideos, los garbanzos, la verdura y las carnes.",
        "img" : "../../../../assets/imagenes/Comida-Española/cocido madrileño.jpg",
        "pais" : "españolas",
    
},
{
        "nombre" : "Croquetas",
        "ingredientes1" : "2 cucharadas de leche de vaca sal 1/2 cucharaditas de pimienta 1/2 cucharaditas de cebollita verde, picada 2 yemas de huevo, batidas 3 cucharadas de harina",
        "ingredientes2" : "4 tazas de puré de papa, o papas molidas 1 huevo, batido pan molido aceites, para freír",
        "preparacion" : "En un bowl ponga el puré de papa, la leche, sal, pimienta, cebollita verde picada, yemas de huevo batidas y harina. Mezcle bien todo y refrigere. Con una cuchara para hacer bolas de helado, forme bolas de la masa de papa y pase por el huevo batido y luego por el pan molido. Fría cada croqueta en un sartén lleno con aceite bien caliente hasta que se dore por todos los lados",
        "img" : "../../../../assets/imagenes/Comida-Española/croquetas.jpg",
        "pais" : "españolas",
    
},
{
        "nombre" : "Escalivadas",
        "ingredientes1" : "4 berenjenas grandes 8 pimientos rojos 2 dientes de ajo picados 1 dl de aceite de oliva Sal.",
        "ingredientes2" : ",
        "preparacion" : "Asar las berenjenas y los pimientos a la brasa o al horno. Pelar y quitar la parte del tallo de las berenjenas. Pelar y retirar las semillas a los pimientos. Cortar las verduras en tiras. Espolvorear con ajo picado fino y aderezar con aceite y sal antes de servir.",
        "img" : "../../../../assets/imagenes/Comida-Española/escalivadas.jpg",
        "pais" : "españolas",
    
},
{
        "nombre" : "fideua ",
        "ingredientes1" : "
        500 gramos de fideos
        Medio pimiento rojo
        Medio pimiento verde
        2 calamares
        200 gramos de gambas
        Caldo de pescado casero
        Azafrán o colorante
        ",
        "ingredientes2" : ",
        "preparacion" : "
        Comenzamos la receta de fideuá dorando los fideos en la paella. Los ponemos a fuego medio y vamos dándoles vueltas poco a poco hasta que se vayan dorando. Una vez dorados a nuestro gusto los retiramos y reservamos.
        En esa paella, rehogamos a fuego medio los pimientos, haciendo un buen sofrito. Ponemos un poco de sal. Luego rectificamos pero con el caldo seguramente que se quede perfecto.
        Una vez rehogado agregamos los calamares limpios y cortados en trocitos. Dejamos que se hagan unos minutos.
        Incorporamos los fideos, las gambas peladas y cubrimos con caldo de pescado casero (agregamos el azafrán o el colorante). 
        La cantidad será más o menos la misma en mi caso (500 ml), pero dependerá de los fideos que uséis porque necesitará más o menos. Si necesita más caldo se lo podemos añadir cociendo, es más sencillo que el arroz.
        Cuando esté listo lo dejamos reposar unos 5 minutos a disfrutar.
        ",
        "img" : "../../../../assets/imagenes/Comida-Española/fideua.jpg",
        "pais" : "españolas",
    
},
{
        "nombre" : "Gambas al ajillo ",
        "ingredientes1" : "
        600 gr de gambas
        4 dientes de ajo
        1/2 guindilla
        aceite
        sal
        perejil picado",
        "ingredientes2" : ",
        "preparacion" : "
        Pela las gambas en crudo. Calienta el aceite y fríe los ajos en láminas y la guindilla cortada en aros.
        Después agrega las gambas, sazona y deja que se hagan unos minutos dándoles vueltas en la sartén.
        Espolvorea con perejil y sirve.
        ",
        "img" : "../../../../assets/imagenes/Comida-Española/gambas al ajillo.jpg",
        "pais" : "españolas",
    
},
{
        "nombre" : "Paella",
        "ingredientes1" : "
        6 salchichas rebanadas
        200 g de chorizo cortado en rebanadas
        200 g de carne de cerdo cortada en cubos
        1 pechuga de pollo sin hueso y cortada en cubos
        3 pescados sierra cortados en rebanadas
        20 camarones lavados
        100 g de almejas lavadas
        100 g de ejotes",
        "ingredientes2" : "
        1 pimiento rebanado en juliana
        ½ cucharadita de cebolla en polvo
        1 cucharadita de ajo en polvo
        1 cucharadita de azafrán en polvo
        2 cucharadas de consomé en polvo
        Aceite de oliva suficiente",
        "preparacion" : "
        Si no tienes una paellera, usa una cacerola donde quepan todos los ingredientes y pon a calentar el aceite.
        A fuego lento, fríe las salchichas y después agrega el pollo, la carne de cerdo, el chorizo, los ejotes y el pimiento, 
        integra perfectamente y después agrega los condimentos (el ajo en polvo, la cebolla en polvo, el consomé, sal y pimienta).
        Mueve hasta que la carne tome un color dorado.
        Agrega las tazas de arroz y las de agua y cocina por dos o tres minutos más.
        Ahora integra el pescado, los camarones, las almejas y el azafrán.
        Tapa con papel aluminio y deja cocinando a fuego bajo hasta que el agua se evapore y el arroz quede en su punto adecuado de cocción. 
        .A disfrutar",
        "img" : "../../../../assets/imagenes/Comida-Española/paella.jpg",
        "pais" : "españolas",
    
},
{
        "nombre" : "Pimientos rellenos",
        "ingredientes1" : "
        4 Piezas Pimiento morrón limpios
        2 Cucharadas Aceite de maíz
        2 Tazas Champiñones rebanados
        100 Gramos Queso tipo manchego rallado
        4 Cucharadas Sazonador Líquido MAGGI®",
        "ingredientes2" : ",
        "preparacion" : "
        Lleva los pimientos al horno de microondas por 7 minutos. 
        Luego, mételos en una bolsa de plástico hasta que suden lo suficiente y de esta manera los puedas pelar más fácilmente. Corta la parte superior de cada pimiento.
        Aparte, en una sartén con aceite caliente sofríe los champiñones hasta que doren junto con el Líquido Sazonador MAGGI® . Retira del fuego y mezcla con el queso tipo manchego.
        Rellena los pimientos con esta preparacion. 
        Acomódalos en un recipiente y lleva por 30 segundos al horno de microondas.
        ",
        "img" : "../../../../assets/imagenes/Comida-Española/pimientos rellenos.jpg",
        "pais" : "españolas",
    
},
{
        "nombre" : "Pisto",
        "ingredientes1" : "
        400 g. de tomates maduros
        1 cebolla grande
        1 pimiento rojo
        1 pimiento verde
        1 calabacín
        1 diente de ajo
        50 ml. de vino blanco",
        "ingredientes2" : "
        Sal (al gusto de cada casa)
        Aceite de oliva virgen extra suave",
        "preparacion" : "
        Lavamos las verduras. Las picamos en “brunoise” (dados pequeños), de similar tamaño. El diente de ajo, bien picadito. 
        En una cazuela o en una sartén alta, echamos una lámina de aceite de oliva virgen extra y calentamos. Cuando coja temperatura, añadimos la cebolla y sofreímos.
        A continuación el ajo y los pimientos. Mezclamos bien.
        Salamos al gusto, y añadimos un buen chorro de vino blanco. En este punto, tapamos la cazuela, bajamos a fuego lento y cocinamos 30 minutos.
        El siguiente paso es incorporar el calabacín. Mezclamos de nuevo, tapamos y seguimos cocinando otros 20 minutos. A fuego bajo, pero que se aprecie un “chup chup” continuo.
        Los tomates cortados en dados, los trituramos con la batidora, y los añadimos al resto de verduras.
        Mezclamos, rectificamos de sal si es necesario y dejamos cocinar 20 minutos más (con la cazuela tapada). Pasado el tiempo, tendremos listo un delicioso pisto de verduras. 
        ",
        "img" : "../../../../assets/imagenes/Comida-Española/pisto.jpg",
        "pais" : "españolas",
    
},
{
        "nombre" : "Pulpo a la gallega",
        "ingredientes1" : "
        Suficiente de agua
        1 cucharada de sal de mar, para cocer el pulpo
        800 gramos de pulpo, entero, limpio
        3 papas, con cáscara
        2 cucharadas de paprika
        2 cucharadas de aceite de oliva
        1 pizca de sal",
        "ingredientes2" : ",
        "preparacion" : "
        Hierve agua en una cacerola y agrega sal. Cuando el agua esté hirviendo con una burbuja alta, toma el pulpo de la cabeza, de manera que cuelguen los tentáculos.
        Metemos el pulpo en agua hirviendo sin soltarlo y lo sacamos 3 veces seguidas, a la tercera lo metemos por completo en el agua hasta que lo cubra. 
        Al hacer esto, el pulpo quedará terso y evitaremos que se despelleje al cocerlo. Cocina por 18 minutos.
        Pasado el tiempo, agrega las papas y cocina por 20 minutos más. Para comprobar que el pulpo está cocido, puedes atravesar un palillo de madera en el centro del pulpo, si no opone resistencia es que está listo.
        Sobre una tabla corta el pulpo en trozos medianos y las papas en rodajas.
        En un plato redondo de madera sirve una cama de papas, coloca encima el pulpo, espolvorea con la paprika, el aceite de oliva y la sal gruesa.
        ",
        "img" : "../../../../assets/imagenes/Comida-Española/pulpo a la gallega.jpg",
        "pais" : "españolas",
    
},
{
        "nombre" : "Tortilla de papa ",
        "ingredientes1" : "
        5 papas, grandes peladas y en rebanadas muy delgadas
        1 cebolla, grande, rebanada en gajos delgaditos
        1/2 tazas de aceite de oliva
        9 huevos
        al gusto de pimienta, al gusto",
        "ingredientes2" : ",
        "preparacion" : "
        Ponga a calentar el aceite de oliva en un sarten grande (del tamaño de la tortilla de patatas).
        Agregue las papas y la cebolla en rebanadas muy delgadas.
        Cocine a fuego medio moviendo ocasionalmente hasta que la papa se empiece a deshacer y este cocida, unos 20 minutos. Ponga sal y pimienta al gusto.
        En un plato hondo, mezcle los huevos con un tenedor hasta que se esponjen un poco.
        Deje cocer con las papas hasta que se vea la orilla dorada y que el centro ya casi no se mueva.
        Voltee la tortilla en un sartén del mismo tamaño (ya engrasada con aceite de oliva y caliente).
        Una vez que se termine de cocer, apague el fuego y deje enfriar ligeramente.
        Desmolde sobre un platón y sirvala a temperatura ambiente. 
        ",
        "img" : "../../../../assets/imagenes/Comida-Española/tortillas de papa.jpg",
        "pais" : "españolas",
    
},
{
        "nombre" : "Omuraisu ",
        "ingredientes1" : "3 huevos 30 gr de pollo Media cebolla pequeña Un puñado de champiñones 60 gr de arroz cocido japonés 1 cucharada de vino blanco",
        "ingredientes2" : "Ketchup Sal y pimienta Aceite para freír.",
        "preparacion" : "En primer lugar, prepara los ingredientes sólidos. Corta la cebolla en juliana o tiras finas, el pollo en dados pequeños y los champiñones en láminas y luego por la mitad. Seguidamente, caliente un poco de aceite en una sartén y fríe la cebolla, el pollo y los champiñones a fuego medio. Cuando la cebolla esté transparente, añade un par de cucharadas de ketchup, el arroz cocido y el vino blanco. Añade sal y pimienta al gusto. Aparte, bate los huevos. Caliente una sartén mediana con un poco de aceite. Cuando esté caliente, echa los huevos batidos y repártelos por toda la sartén. Con unos palillos de cocina puedes ayudar a que se vaya cocinando todo el huevo. Cuando el huevo esté casi listo, pero no del todo, apaga el fuego. Añade entonces la mezcla de arroz en uno de los extremos. Finalmente, dobla la tortilla con ayuda de una espátula o de la manera que te resulte más fácil. Sirve la tortilla haciendo un dibujo con ketchup en el centro de la misma. Sí, este paso es totalmente opcional, pero si has estado en Japón y has comido omuraisu, te habrás dado cuenta de que siempre viene con un dibujo hecho con el ketchup. Generalmente, además, es un corazón.",
        "img" : "../../../../assets/imagenes/Comida-Japonesa/omuraisu.jpg",
        "pais" : "japonesa",
    
},
{
        "nombre" : "Onigiri",
        "ingredientes1" : "Dos medidas de arroz japonés blanco cocido Láminas de alga seca nori Relleno 1: Atún y mayonesa Relleno 2: Copos de bonito seco katsuobushi y salsa de soja Agua ",
        "ingredientes2" : "Una pizca de sal Una pizca de sésamo blanco",
        "preparacion" : "En primer lugar, partimos de la base de que tienes ya arroz cocido y reposado en la suihanki. Si no tienes, lo habrás cocinado en olla y lo habrás dejado reposar igualmente. Seguidamente, prepara los ingredientes que vayas a necesitar para rellenar y finalizar los onigiri. En este caso, prepara un cuenco con atún en conserva y mayonesa y otro con copos de bonito y salsa de soja. Corta las láminas de alga nori en tiras de 2 o 3 cm de ancho y unos 10 cm de longitud. A continuación, dale forma a los onigiri. Si tienes moldes para onigiri, sigue las instrucciones de los mismos: moja con agua los bordes, añade el arroz y, con la ayuda de los dedos, deja espacio suficiente para añadir el relleno, tapa con arroz, presiona y dale forma y, finalmente, extrae del molde. Si no tienes moldes, usa las manos. Para ello, humedécelas y espolvoréalas con sal y sésamo. Toma una porción de arroz para darle forma y ve presionando para compactarlo. Seguidamente, hazle un agujero en el medio donde pondrás el relleno y tapa con más arroz, volviendo a presionar para darle forma y que el exterior queda compacto. Intenta hacer una forma triangular aunque si no te sale, da igual. Para finalizar, cubre medio onigiri con las tiras de alga nori que has cortado previamente. Si los vas a comer en casa, hazlo en el último momento, junto antes de comer, para que el alga siga estando crujiente.",
        "img" : "../../../../assets/imagenes/Comida-Japonesa/onigiri.jpg",
        "pais" : "japonesa",
    
},
{
        "nombre" : "Pollo teriyaki",
        "ingredientes1" : "4 pechugas de pollo enteras 1 cebolleta grande 200 ml. salsa de soja 100 ml. de Mirin 100 ml. de sake 100 g. de azúcar blanquilla",
        "ingredientes2" : "5 g. de piel de jengibre fresco 4 cucharadas de aceite de oliva suave Para acompañar: 250 g. de arroz basmati Sundari ",
        "preparacion" : "La salsa teriyaki se hace mezclando y calentando cuatro ingredientes: azúcar, takara mirin, salsa de soja y sake (esté último puede ser sustituido por otro tipo de alcohol) y yo además le añado la frescura del jengibre. Los ingredientes no tienen porqué estar en la misma proporción, sino que depende de la receta. Preparamos nuestra salsa echandoo la salsa de soja, el Mirin, el azúcar, el sake y la piel de jengibre a un cazo. Calentamos a fuego alto y removemos hasta que se disuelva el azúcar. Dejamos cocer durante 3 minutos removiendo de vez en cuando. Colamos la salsa y reservamos. En caso de que no queráis hacer la salsa en casa tenéis la opción de comprarla ya hecha, pero no queda igual de rico. preparacion del pollo teriyaki. Presentación final Limpiamos las pechugas de pollo de posibles restos de grasa y venitas que pueda tener. Las troceamos en dados no demasiado pequeños. Como acompañamiento al pollo lo más habitual es utilizar cebolla o cebolleta fresca que se cocina con la carne. Con cualquiera de las dos conseguiremos que al final quede caramelizada gracias al azúcar de la salsa teriyaki. En este caso hemos elegido una cebolleta grande, la cortamos en juliana en tiras gruesas. En una sartén amplia ponemos a calentar el aceite y añadimos los trozos de pollo y la cebolleta. Doramos durante unos 5 o 6 minutos. Añadimos la salsa teriyaki que tenemos preparada y dejamos cocer a fuego medio durante 15 minutos. Veremos que el pollo está brillante, como lacado con la salsa, y esta casi se ha consumido. Servimos el pollo con arroz blanco, si os atrevéis os dejo con esta receta de arroz basmati, ideal para este plato.",
        "img" : "../../../../assets/imagenes/Comida-Japonesa/pollo teriyaki.jpg",
        "pais" : "japonesa",
    
},
{
        "nombre" : "Ramen",
        "ingredientes1" : "1 ½ ℓ de caldo de pollo 1 poro mediano cortado en trozos medianos 2 cebollas cambray cortadas en trozos medianos 6 hongos shiitake deshidratados y cortados en trozos medianos 10 g de jengibre fresco 1 diente de ajo 1 anís estrella 1 lámina de alga nori ",
        "ingredientes2" : "4 rebanadas gruesas de tocino Para el montaje. 2 porciones de fideos de ramen 30 ml de base de soya y miso 2 huevos cocidos, tiernos",
        "preparacion" : "Ponga el caldo de pollo sobre el fuego, incorpore el resto de los ingredientes y deje que hierva durante 30 minutos. Cuele el caldo y póngalo nuevamente sobre el fuego durante otros 30 minutos. Para el Montaje. Hierva los fideos de ramen durante 8 minutos o hasta que su textura sea flexible y suave. Distribuya la base de soya y miso en dos tazones. Distribuya los fideos cocidos en los tazones y mezclelos muy bien con la base de soya y miso, sirva el caldo caliente sobre ellos. Corte los huevos cocidos por la mitad. Coloque los huevos cocidos, el germen de soya, el cebollín picado y los granos de elote sobre los tazones, espolvoree el ajonjolí negro.",
        "img" : "../../../../assets/imagenes/Comida-Japonesa/ramen.jpg",
        "pais" : "japonesa",
    
},
{
        "nombre" : "Sashimi ",
        "ingredientes1" : "1 medallón de atún Dolores®, Tuny® 1 cucharadita de ajonjolí 1 cucharadita de ajonjolí negro 2 cucharadas de salsa de soya 1 cucharadita de aceite de ajonjolí",
        "ingredientes2" : "1 cucharada de jugo de limón 1 cucharada de cebollín 1 cucharadita de jengibre, rallado    ",
        "preparacion" : "Cortar el atún congelado en láminas delgadas. Mezclar la soya y el limón y el jengibre rallado. Coloca el atún en un plato. Sirve la salsa encima del atún y unas gotas de aceite de ajonjolí. Espolvorea el ajonjolí y el cebollín picado. ",
        "img" : "../../../../assets/imagenes/Comida-Japonesa/sashimi.jpg",
        "pais" : "japonesa",
    
},
{
        "nombre" : "Soba",
        "ingredientes1" : "1.5 litros de agua 1 trozo grande de kombu unos 15 – 18 gramos 2 setas shiitake secas 300 gramos de fideos soba 175 ml de salsa de soja 120 ml de mirin  ",
        "ingredientes2" : ",
        "preparacion" : "La noche anterior poner el agua, kombu y setas en un bol grande. Tapar y dejar en la nevera hasta que vayas a preparar la sopa. Llevar una olla de agua a ebullición y añadir los fideos. Hervir según las indicaciones del producto hasta que estén al dente. Escurrir y lavar con agua fría, frotándolos suavemente para sacar el almidón. Volver a escurrir y reservar. Retirar el kombu y las setas del agua y llevar el caldo a ebullición. Añadir la salsa de soja, mirin y azúcar y mezclar bien para disolver el azúcar. Dividir la soba en cuatro bols y servir",
        "img" : "../../../../assets/imagenes/Comida-Japonesa/soba.jpg",
        "pais" : "japonesa",
    
},
{
        "nombre" : "Sopa de misu ",
        "ingredientes1" : "1 l de agua o caldo dashi 15 g de alga wakame deshidratada 3 cucharadas de miso 200 g de tofu 50 g de puerro ", 
        "ingredientes2" : " 50 g de cebolleta Fideos soba (opcional).",
        "preparacion" : "Ponemos el agua en una olla y la llevamos a ebullición. Una vez comience a hervir, sacamos un poco de agua a un vaso para disolver después el miso. Metemos en la olla el alga wakame y lo dejamos cocer 5 minutos. Después echamos el tofu cortado en dados pequeños de 1 cm aproximadamente y la verdura en trocitos pequeños. Cocinamos la sopa otros 5 minutos Disolvemos el miso en agua y, cuando la sopa esté lista, la retiramos del fuego y le añadimos el agua con miso disuelto. Lista para servir. Si te gusta con fideos soba y de manera opcional, solo tienes que seguir las instrucciones del fabricante para cocerlos. Una vez los tengas pones una pequeña cantidad en cada cuenco vertiendo la sopa de miso por encima, de manera similar a cuando hacemos sopa ramen en casa.",
        "img" : "../../../../assets/imagenes/Comida-Japonesa/sopa de misu.jpg",
        "pais" : "japonesa",
    
},
{
        "nombre" : "Rollos de Sushi empanizado",
        "ingredientes1" : "
        1 1/2 tazas de arroz de sushi
        suficiente de agua, fría para enjugar el arroz
        3 tazas de agua, caliente para la cocción del arroz
        4 cucharadas de vinagre de arroz
        3 cucharaditas de azúcar
        1 cucharadita de sal
        5 algas nori
        ",
        "ingredientes2" : "
        1 taza de queso crema, en bastones para el relleno
        1 taza de pepino, en bastones, sin cáscara para el relleno
        1 taza de zanahoria, en bastones, sin cáscara para el relleno
        1 1/2 tazas de surimi, en bastones para el relleno
        ",
        "preparacion" : "
        Remoja el arroz en agua fría por 5 minutos, escurre y repite tres veces.
        En una ollita con tapa, cocina el arroz con 3 tazas de agua caliente por 10 minutos, a fuego bajo. Retira del fuego. Extiende sobre una charola y enfría por 15 minutos.
        Mezcla el vinagre de arroz con el azúcar y la sal. Luego vértelo sobre el arroz frío e incorpora. Reposa unos minutos.
        Arma el rollo de sushi: sobre un tapete de bambú con plástico adherente, coloca una pieza de alga Nori; con tus manos húmedas, cubre con arroz; da la vuelta y rellena con los bastones de queso crema, pepino, zanahoria y surimi. Cierra con ayuda del tapete y dale forma al apretarlo. Refrigera por 10 minutos.
        Para empanizar el rollo, cúbrelo con la harina, pásalo por el huevo y empanízalo con el pan molido. Fríe en aceite vegetal caliente. Escurre.
        Corta el rollo en rodajas de 1 centímetros de ancho. Coloca en un plato extendido, acompaña con pepino y decora con ajonjolí. Disfruta con salsa de soya y chile serrano.
        
        ",
        "img" : "../../../../assets/imagenes/Comida-Japonesa/rollos de sushi empanizado.jpg",
        "pais" : "japonesa",
    
},
{
        "nombre" : "Tekoyaki",
        "ingredientes1" : "
        225 gr Harina de takoyaki
        2 Huevos
        Aceite de oliva o girasol
        1/4 Repollo
        200 gr Pulpo hervido y troceado en pequeños tacos
        700 ml Agua
        1/2 Cebolla picada fina
        ",
        "ingredientes2" : "
        Benishōga (jengibre encurtido)
        Mayonesa japonesa o ligera
        Salsa Tonkatsu
        ",
        "preparacion" : "
        Lo primero que tendrás que hacer es preparar los ingredientes sólidos de la receta: Se corta el pulpo en pequeños trocitos (que puedan caber dentro de tus bolas de Takoyaki); se pica el repollo en trozos muy pequeños, la cebolla y el benishōga.
        Para el siguiente paso necesitarás un cuenco grande, en donde se añadirá la harina, los huevos y el agua. Se mezclan bien hasta que se obtenga una mezcla homogénea y cremosa, no tiene que quedar muy liquida (si ha quedado muy liquida puedes agregar un poco más de harina hasta que quede más cremosa).
        A la mezcla se le añade benishōga troceado, la cebolla y el repollo. Sigue mezclando muy bien hasta que los ingredientes se encuentren bien distribuidos por toda la mezcla.
        Ahora debes comenzar a calentar la plancha Takoyaki e ir añadiendo aceite de oliva o de girasol en cada uno de los huecos en los que colocaras un Takoyaki, para evitar que las bolitas queden pegadas y se rompan al despegarlas. 
        
        ",
        "img" : "../../../../assets/imagenes/Comida-Japonesa/tekoyaki.jpg",
        "pais" : "japonesa",
    
},

{
    "nombre" : "Tempura de camarones",
    "ingredientes1" : "
    500 gramos de camarón grande
    3/4 tazas de agua
    1 taza de harina para hornear
    1 cucharada de polvo para hornear
    1/4 cucharadas de sal
    ",
    "ingredientes2" : "
    1/4 tazas de caldo de pollo
    4 cucharadas de salsa de soya
    2 cucharadas de agua
    1 cucharada de vinagre de arroz
    2 cucharadas de azúcar
    ",
    "preparacion" : "
    Primero prepare los camarones. Remueva la piel pero deje las colas. Con un cuchillo corte una ligera apertura en la curvatura externa del camarón. Abra los camarones y retire la vena negra. Lave en agua fría.
    En una olla ponga a calentar el aceite vegetal.
    Mientras tanto en una olla pequeña combine el caldo de pollo, la salsa soya, las 2 cucharadas de agua, el vinagre, el azúcar y el jengibre y cocine hasta que hierva. Hierva por 2 minutos.
    Cuele la salsa y guarde para utilizar como salsa acompañante de los camarones.
    En un recipiente hondo mezcle el agua fría con la harina, el polvo para hornear y la sal. Con un tenedor mezcle bien.
    
    ",
    "img" : "../../../../assets/imagenes/Comida-Japonesa/tempura de camarones.jpg",
    "pais" : "japonesa",

}, 
{
        "nombre" : "Dorayaki",
        "ingredientes1" : "
        Huevos 2
        Azúcar 50 g
        Miel 15 ml
        Harina de repostería 85 g
        Sal una pizca
        Levadura química 2 ml
        ",
        "ingredientes2" : "
        Agua 40 ml
        Aceite de oliva virgen extra
        Anko o crema de chocolate para rellenar
        ",
        "preparacion" : "
        Disponer los huevos en un cuenco con el azúcar y la miel. Batir con una batidora de varillas hasta que doble o casi triplique su volumen, y tenga un color pálido y textura espesa. Tamizar encima la harina con la levadura y una pizca leve de sal. Mezclar con movimientos envolventes y suaves. Incorporar el agua y tapar.
        Dejar reposar al menos 15 minutos a temperatura ambiente. Preparar una plancha o buena sartén antiadherente engrasándola ligeramente con aceite de girasol o mantequilla fundida. Calentar a fuego medio y añadir cucharones de masa, dando forma circular con el dorso de una cuchara.
        Cocinar hasta que salgan burbujas, deslizar por abajo una espátula y dar la vuelta. Cocinar hasta que esté bien dorado y retirar. Continuar hasta terminar la masa. Untar la mitad de las tortitas con anko, chocolate o crema y formar los dorayakis uniendo con el resto.
        
        ",
        "img" : "../../../../assets/imagenes/Comida-Japonesa/dorayaki.jpg",
        "pais" : "japonesa",
    
},
{
        "nombre" : "Gyosa",
        "ingredientes1" : "
        1 paquete de pasta para Gyoza (50 piezas aprox.)
        400 g. de carne de cerdo picada
        150 g. de col china
        50 g. de cebolleta
        2 dientes de ajo picados
        1 cucharada de jengibre rallado
        1 cucharada de salsa de soja
        ",
        "ingredientes2" : "
        1 cucharada de salsa de soja
        1 cucharadita de sal
        1/2 cucharadita de azúcar
        1/2 cucharada de maicena
        un poco de aceite de sésamo
        ",
        "preparacion" : "
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
        
        ",
        "img" : "../../../../assets/imagenes/Comida-Japonesa/gyosa.jpg",
        "pais" : "japonesa",
    
},
{
  "nombre" : "Carpaccio",
  "ingredientes1" : "Solomillo de ternera Sal Pimienta Aceite de oliva virgen extra Alcaparras Queso Parmesano Mostaza en grano",
  "preparacion" :"Cogemos el solomillo y lo metemos durante 1 hora y pico en la nevera, que notemos que se empieza a congelar pero no llega a solidificarse del todo. Una vez pasado ese tiempo cortamos con un cuchillo afilado lonchas muy finas, lo más finas que podamos. Ponemos un chorrito de aceite de oliva en un plato y ponemos sal y pimienta. Cubrimos bien con las lonchas de carpaccio, aderezamos con sal, pimienta, unas alcaparras, la mostaza en grano y el queso Parmesano. Todo al gusto y en la cantidad que queramos. Servimos frío.",
  "img" : "../../../../assets/imagenes/Comida-italiana/sopa de misu.jpg",
  "pais" : "italiana",

},
{
  "nombre" : "Polenta",
  "ingredientes1" : "4 tazas de agua Sal, al gusto 1 taza de harina de maíz o polenta instantánea 1 cucharada de aceite de oliva o mantequilla (opcional) Queso parmesano rallado (opcional).",
  "preparacion" :"En una olla grande, lleve el agua y sal a hervir. Gradualmente añada la harina, removiendo constantemente. Baje la temperatura a baja y continúe removiendo por alrededor de 30 minutos para harina de maíz o 15 minutos para polenta instantánea. Para una polenta firme, vierta un poco en una bandeja para hornear y déjela enfriar, luego mantenga en el refrigerador antes de rebanar. Si usted sirve polenta suave, mezcle el aceite de oliva o mantequilla y parmesano, si lo usa y sirva dentro de 20 minutos.",
  "img" : "../../../../assets/imagenes/Comida-italiana/sopa de misu.jpg",
  "pais" : "italiana",

} ,
{
  "nombre" : "Pasta",
  "ingredientes1" : "350 gr Tallarines 3 jitomates 1 diente Ajo 2 1/4 Cebollas 3 cdas Aceite de Oliva",
  "preparacion" :"Cuece las pasta en agua con sal hasta que quede al dente. Escurre y reserva. Licúa los jitomates, el ajo y 1/4 de cebolla para hacer la salsa. Reserva. Parte las cebollas restantes por la mitad y córtalas en tiras. Calienta en un sartén el aceite, fríe el tocino y añade la cebolla y el ajo; sofríe todo hasta que se dore. Incorpora la salsa y deja cocer a fuego lento por 10 minutos. Agrega los tallarines. Mezcla todo y sirve espolvoreando parmesano y pimienta.",
  "img" : "../../../../assets/imagenes/Comida-italiana/sopa de misu.jpg",
  "pais" : "italiana",

} ,
{
  "nombre" : "Pizza",
  "ingredientes1" : "Para la masa de cuatro pizzas individuales Harina 00, 500 g (*) Levadura fresca prensada de panadería, 2 g Agua a temperatura ambiente, 350 ml Aceite de oliva virgen extra, 20 g Miel, una cucharadita",
  "preparacion" :"En un bol, ponemos la mitad de agua y disolvemos la levadura prensada de panadería. En el bol de una amasadora tipo Kitchen Aid, ponemos la harina, la miel y el agua con la levadura que hemos disuelto. Ponemos a funcionar la máquina a velocidad media y, sin dejar de amasar, vamos añadiendo el resto del agua y la sal. Finalmente, añadimos el aceite poco a poco, dejándolo caer en forma de hilo mientras la máquina sigue amasando. Enharinamos ligeramente la mesa de trabajo, volcamos la masa, la tapamos y la dejamos reposar media hora. Pasado ese tiempo trabajamos la masa con las manos, plegándola una y otra vez sobre sí misma hasta formar una bola de masa lisa. Ponemos nuestra bola de masa en un bol limpio ligeramente engrasado y enharinado, lo tapamos con papel film y dejamos reposar durante unas ocho horas.",
  "img" : "../../../../assets/imagenes/Comida-italiana/sopa de misu.jpg",
  "pais" : "italiana",

},
 {
  "nombre" : "Rissoto",
  "ingredientes1" : "1 cucharada de aceite de oliva o mantequilla 1 cebolla mediana finamente cortada en cubitos 1 ½ taza de arroz Arborio 4 tazas de caldo pollo o verduras 1 cucharada de mantequilla dulce (opcional)",
  "preparacion": "Coloque el caldo a ebullición sobre una llama alta. Gire la llama hacia abajo y deje a un lado en la parte posterior de la estufa. En un wok o horno holandés, calentar el aceite de oliva a fuego medio-alto. Añadir las cebollas y saltear hasta que sean suaves y transparentes, pero sin color unos 5 minutos. Agregue el arroz y cocine hasta que los granos se vuelvan transparentes en los bordes, aproximadamente 1 minuto. Añada un cucharón de caldo al arroz y cocine agitando hasta que haya sido absorbido. Continúe agregando el caldo, 1 cucharón a la vez, revolviendo todo el tiempo hasta que el arroz esté al dente y cremoso, alrededor de 15 a 20 minutos. Reserve la última cucharada. Agregue las verduras crudas, por ejemplo, espárragos, cuando el caldo esté casi evaporado o con el segundo al último cucharón si está cocido o congelado.",
  "img" : "../../../../assets/imagenes/Comida-italiana/sopa de misu.jpg",
  "pais" : "italiana",

},
 {
  "nombre" : "Spagetti",
  "ingredientes1" : "1 paquete de espagueti 1/4 de crema agria 1 taza de puré de jitomate 1/4 de mantequilla",
  "preparacion" :"Hierve 2 litros de agua y, cuando esté en su punto, agrega 2 cucharadas de sal. Posteriormente, cuece la pasta hasta que esté blanda. Retira del fuego, cuela la pasta y desecha el agua. Hierve el puré de jitomate a fuego lento y añade la crema, la mantequilla y el cubo sazonador. Vierte el espagueti en la salsa y mezcla. Sirve. Espolvorea con el queso parmesano al gusto.",
  "img" : "../../../../assets/imagenes/Comida-italiana/sopa de misu.jpg",
  "pais" : "italiana",

},
{
  "nombre" : "Mascarpone",
  "ingredientes1" : "5 yemas de huevo 1/2 tazas de azúcar glass, para las yemas 2 cucharadas de vino, dulce 1 ralladura de naranja 2 paquetes de queso mascarpone, (226 g c/u) batido previamente un poco, para que esté suave",
  "preparacion" :"Para la crema: bate las yemas con el azúcar, 2 cucharadas de vino dulce y la ralladura de naranja por 5 minutos, debes obtener una consistencia esponjosa y tersa. Luego mezcla de manera envolvente con el queso mascarpone y reserva. Aparte, bate las claras con la pizca de sal por 5 minutos, hasta que doblen su volumen (punto de turrón) y añádelas de forma envolvente a la mezcla de queso mascarpone. Reserva. Mezcla el café con el vino y reserva. Remoja las soletas en el café y acomódalas en un molde formando una base, para después cubrirla con la crema de mascarpone. Repite el proceso hasta llenar el molde, cubre por completo con crema y refrigera.",
  "img" : "../../../../assets/imagenes/Comida-italiana/sopa de misu.jpg",
  "pais" : "italiana",

},
*/

//BIEN
{"nombre" : "Agnolotti","ingredientes1" : "500 gr de harina\n3 huevos\nSal\nIngredientes para el relleno:\n150 gr de carne de ternera picada\n50 gr de carne de cerdo picada\n100 gr de mantequilla\n½ cebolla troceada\n1 huevo\nQueso parmesano rallado","ingredientes2" : "1 diente de ajo\n½ cucharadita de pimienta blanca\n1 cucharadita de romero\n1 cucharadita de salvia\n1½ cucharadita de albahaca\n½ cucharadita de laurel en polvo\nAceite de oliva","preparacion" :"Para empezar esta receta de agnolotti al estilo piamontesa, primero hacemos una mezcla con la harina, el huevo y una pizca de sal. Si vemos que nos queda muy seca añadiremos un poquito de agua. Por el contrario, si vemos que queda la masa húmeda, añadimos un poquito más de harina. Una vez bien amasado lo dejamos en reposo durante 15 minutos aproximadamente.\nMientras tanto, hacemos otra mezcla en un bol con la carne de cerdo, la carne de ternera, una pizca de sal, pimienta, romero, salvia, albahaca y laurel. Reservamos. Después pelamos y cortamos la cebolla y el diente de ajo lo más pequeño que podamos. Rehogamos en una sartén con un poco de aceite de oliva y luego lo mezclamos con la carne para el relleno.\nEn este momento extendemos la masa con la ayuda de un rodillo de madera previamente enharinado. Cortamos la masa en cuadrados de unos 4×4 centímetros. Para ello podemos ayudarnos de un cortapastas especial de cocina, pero si no disponemos de ello podemos hacerlo con un cuchillo que corte bien.\nDespués colocamos en el centro de cada cuadrado un poco de la mezcla de relleno. A continuación, mojamos los bordes con un poquito de agua y tapamos con otro cuadrado de masa cerrándolo bien. Este procedimiento lo repetimos hasta terminar toda la masa.\nPor último solo nos queda cocer los agnolotti en una olla con abundante agua hirviendo con una pizca de sal. Contaremos unos 5 minutos a partir de que comience la ebullición. Luego los escurrimos bien y los emplatamos calientes con la mantequilla derretida por encima. Antes de servir a la mesa nuestros agnolotti a la piamontesa añadimos queso parmesano a nuestro gusto. Buen provecho!!","img" : "../../../../assets/imagenes/Comida-Italiana/agnolotti.jpg","pais" : "italianas"},

{"nombre" : "Caprese","ingredientes1" : "Tomate 1\nMozzarella fresca una bola 250 g\n Albahaca unas hojas de tamaño grande\nAceite de oliva virgen extra para aliñar","ingredientes2" : "Vinagre de Módena unas gotas\nSal y pimienta al gusto","preparacion" :"Es una receta tan sencilla que no tiene ningún misterio. Lavamos bien el tomate y la albahaca y los secamos con papel de cocina. Secamos también la bola de mozzarella para facilitarnos la labor de cortarla en rodajas.\nPor su parte, a las hojas de albahaca, les retiramos el tallo para que en la ensalada, esté la parte más sabrosa solamente. Cortamos el tomate en rodajas finas. Es preferible utilizar tomates maduros y con mucho sabor para notar el contraste de los ingredientes.\nEn un plato colocamos una rodaja de tomate y seguidamente una rodaja de mozzarella acaballada sobre él. Sobre cada loncha de queso mozzarella colocamos una hoja de albahaca. Repetimos la operación hasta cerrar el círculo. Decoramos con un cogollo de albahaca en el centro.","img" : "../../../../assets/imagenes/Comida-Italiana/caprese.jpg","pais" : "italianas"},

{"nombre" : "Caraccio","ingredientes1" : "Solomillo de ternera\nSal\nPimienta\nAceite de oliva virgen extra","ingredientes2" : "Alcaparras\nQueso Parmesano\nMostaza en grano","preparacion" :"1.- Cogemos el solomillo y lo metemos durante 1 hora y pico en la nevera, que notemos que se empieza a congelar pero no llega a solidificarse del todo. Una vez pasado ese tiempo cortamos con un cuchillo afilado lonchas muy finas, lo más finas que podamos.\n2. Ponemos un chorrito de aceite de oliva en un plato y ponemos sal y pimienta. Cubrimos bien con las lonchas de carpaccio, aderezamos con sal, pimienta, unas alcaparras, la mostaza en grano y el queso Parmesano. Todo al gusto y en la cantidad que queramos. Servimos frío.","img" : "../../../../assets/imagenes/Comida-Italiana/carpaccion.jpg","pais" : "italianas"},

{"nombre" : "Gnocci","ingredientes1" : "1 Kg. de patatas medianas (os recomiendo patata gallega, son especiales para cocer) (aprox. 7 patatas).\n200 g. de harina de trigo de fuerza (opcional, también se puede hacer con harina de todo uso, unos 180 g van a la masa y los 20 restantes van para espolvorear la mesa de trabajo y las manos).","ingredientes2" : "2 yemas de huevo.\nSal y nuez moscada rallada o en polvo (al gusto).","preparacion" :"Cuando vayamos a comprar las patatas es preferible que las escojamos de un tamaño similar, porque así luego se cocinarán de igual manera, estando todas en el mismo punto.\nYa en casa el primer paso será lavar bien las patatas, para quitarle la tierra o suciedad que puedan traer.\nLas cocemos sin pelar en abundante agua hirviendo, durante 20-25 minutos, dependiendo de la dureza de las patatas y su tamaño. Se cocinan con su piel para evitar que absorban agua durante la cocción.\nPasado el tiempo, pinchamos las patatas con un tenedor o similar para comprobar si están ya hechas. Lo sabremos cuando al pincharlas, entra y sale el utensilio con facilidad (lo mismo que hacemos cuando horneamos un bizcocho).\nRetiramos de la cazuela y las dejamos reposar 10-15 minutos, para poder manipular las patatas sin riesgo a quemarnos. En cuanto podemos echarles la mano, las pelamos y volvemos a ponerlas a enfriar otros 10 minutos más. Es importante que la carne de la patata esté templada, lo que nos facilitará manejar la masa con facilidad.","img" : "../../../../assets/imagenes/Comida-Italiana/gnocci.jpg","pais" : "italianas"},

{"nombre" : "La Polenta","ingredientes1" : "4 tazas de agua\nSal, al gusto\n1 taza de harina de maíz o polenta instantánea","ingredientes2" : "1 cucharada de aceite de oliva o mantequilla (opcional)\nQueso parmesano rallado (opcional).","preparacion" :"En una olla grande, lleve el agua y sal a hervir. Gradualmente añada la harina, removiendo constantemente. Baje la temperatura a baja y continúe removiendo por alrededor de 30 minutos para harina de maíz o 15 minutos para polenta instantánea.\nPara una polenta firme, vierta un poco en una bandeja para hornear y déjela enfriar, luego mantenga en el refrigerador antes de rebanar. Si usted sirve polenta suave, mezcle el aceite de oliva o mantequilla y parmesano, si lo usa y sirva dentro de 20 minutos.","img" : "../../../../assets/imagenes/Comida-Italiana/polenta.jpg","pais" : "italianas"},

{"nombre" : "Lasaña","ingredientes1" : "3 cucharadas de aceite de oliva\n1 taza de cebolla, picada finamente\n2 cucharadas de ajo, picado finamente\n1 taza de apio, picado finamente\n1 taza de zanahoria, picada en cubos chicos\n1 taza de jitomate, picado en cubos chicos\n500 gramos de carne de res molida\nal gusto de sal\nal gusto de pimienta\n1/2 tazas de puré de tomate","ingredientes2" : "1/2 tazas de vino tinto\n1 cucharadita de tomillo\n1 cucharadita de orégano\n1 hoja de laurel\n2 cucharadas de mantequilla\n3 cucharadas de harina\n1 1/2 tazas de leche\n1/2 cucharaditas de pimienta blanca\n1/4 cucharaditas de nuez moscada\nsuficiente de pasta para lasaña\nsuficiente de agua\nsuficiente de queso manchego, en láminas.","preparacion" :"Para la carne, calienta aceite de oliva en una sartén a temperatura media y añade la cebolla, el ajo, el apio, la zanahoria, el jitomate y la carne de res; agrega el vino tinto, el puré de tomate, el tomillo, el orégano, el laurel y sazona con sal y pimienta; deja cocinar por 20 minutos hasta que se evapore el líquido. Reserva.\nPara la bechamel, en una olla a temperatura media, derrite la mantequilla y agrega la harina, dora por unos minutos y agrega la leche; sazona con pimienta blanca, sal y nuez moscada. Cocina por 5 minutos hasta que espese y reserva.\nPara la pasta, calienta el agua en una olla hasta que hierva, agrega suficiente sal y cocina las láminas de pasta por 5 minutos. Retira y reserva.\nPara armar la lasaña, coloca una capa de pasta, una de salsa bechamel, una de carne y una de queso, repite los pasos hasta llenar el molde, termina con una capa de queso y hornea por 20 minutos. Corta y sirve.","img" : "../../../../assets/imagenes/Comida-Italiana/lasaña.jpg","pais" : "italianas"},

{"nombre" : "Minestrone","ingredientes1" : "Alubias blancas 100 g\nJudías verdes redondas bobby 100 g\nZanahoria 2\nPatata 2\nCalabacín 1\nApio 1\nTomate 2","ingredientes2" : "Diente de ajo 2\nCebolla 2\nPasta corta seca 120 g\nQueso Parmesano 80 g\nAlbahaca 6\nAceite de oliva virgen extra , 3 cucharadas soperas\nCaldo de pollo concentrado 1\nSal y pimienta al gusto.","preparacion" :"Comenzaremos poniendo durante ocho horas las alubias blancas en remojo. Pasado este tiempo las cubrimos en una cazuela con agua fría y las dejamos cocer durante una hora. Esto también se podía hacer en la olla exprés y así se reduce mucho el tiempo de preparación.\nCortamos el resto de las hortalizas en pequeños dados. Cuando las alubias blancas están cocidas las escurrimos reservando el líquido. En la cazuela ponemos a calentar el aceite de oliva y salteamos la cebolla picada durante unos tres minutos. Añadimos las patatas, las zanahorias, el calabacín y el apio. Removemos y cocemos durante otros tres minutos más.\nAñadimos el ajo, la pastilla de caldo, las alubias blancas, las judías verdes, el tomate y el agua reservada de cocer las habas. Cocemos una hora a fuego medio.\nUna vez pasado el tiempo añadimos la pasta, dejamos otros diez minutos a fuego medio. Salpimentamos. En el momento de servir añadir las hojas de albahaca y el queso parmesano rallado.","img" : "../../../../assets/imagenes/Comida-Italiana/minestrone.jpg","pais" : "italianas"},

{"nombre" : "Ossobuco","ingredientes1" : "4 trozos de osobuco de ternera\n2 cebolla\n1 zanahoria\n1 puerro\n2 ajos\n2 tomates maduros\n1 vaso de vino tinto\nCaldo de verduras o de carne (No pongo medida porque iremos poniendole en función de lo que vaya necesitando)","ingredientes2" : "10 granos de pimienta\n5 clavos de olor\n2 hoja de laurel\nSal\nHarina\nAceite de oliva","preparacion" :"1.- Comenzamos dando unos cortes con el cuchillo en los bordes de la carne. Esto se hace para que al cocerlo no se deforme la pieza y quede plana.\n2.- Continuamos rebozando en un poco de harina los trozos de carne de ternera. Lo haremos para sellar la carne en la cacerola.\n3.- Sellamos las rodajas de osobuco, es decir, las doramos a fuego fuerte. Una vez doradas por ambos lados retiramos y reservamos.\n4.- En una cacerola grande pochamos la cebolla, el ajo, el puerro y la zanahoria.\n5.- Una vez pochados agregamos los tomates pelados y sin pepitas. Rehogamos durante unos 5 minutos más.\n6- Incorporamos a la cacerola la carne sellada, un vaso de vino tinto, las pimientas, las hojas de laurel y los clavos de olor. Dejamos que se evapore el alcohol, como unos 3 minutos cociendo a fuego fuerte.\n7.- Una vez evaporado el alcohol, cubrimos con el caldo de carne o verduras y dejamos cocer a fuego medio durante 2 horas. Yo prefiero poco a poco antes que hacerlo 30 minutos en una olla express. Si se va quedando sin caldo, le volvéis a poner un poco más. Yo a la hora de cocción le vuelvo a agregar un poco más de caldo o agua, lo que queráis.","img" : "../../../../assets/imagenes/Comida-Italiana/ossobuco.jpg","pais" : "italianas"},

{"nombre" : "Pasta","ingredientes1" : "350 gr Tallarines \n3 jitomates \n1 diente Ajo 2 \n1/4 Cebollas\n3 cdas Aceite de Oliva \n200 gr Tocino sin grasa, en rebanadas ","ingredientes2" : "2 dientes Ajos finamente picados \nQueso Parmesano rallado \nPimienta Negra.","preparacion" :"Cuece las pasta en agua con sal hasta que quede al dente. Escurre y reserva. Licúa los jitomates, el ajo y 1/4 de cebolla para hacer la salsa. Reserva. Parte las cebollas restantes por la mitad y córtalas en tiras. Calienta en un sartén el aceite, fríe el tocino y añade la cebolla y el ajo; sofríe todo hasta que se dore. Incorpora la salsa y deja cocer a fuego lento por 10 minutos. Agrega los tallarines. Mezcla todo y sirve espolvoreando parmesano y pimienta.","img" : "../../../../assets/imagenes/Comida-Italiana/pasta.jpg","pais" : "italianas"},

{"nombre" : "Pizza","ingredientes1" : "Harina 00, 500 g (*) \nLevadura fresca prensada de panadería, 2 g\nAgua a temperatura ambiente, 350 ml\nAceite de oliva virgen extra, 20 g\nMiel, una cucharadita\nSal, 10 g\nPara la cobertura\nPassata de tomate, 300 g (**)\nAceite de oliva virgen extra, 2 cucharadas","ingredientes2" : "Sal, al gusto\nOrégano seco, 1 cucharadita\nMozzarella fresca, 250 g (2 bolas)\nAlbahaca fresca, un ramillete.","preparacion" :"En un bol, ponemos la mitad de agua y disolvemos la levadura prensada de panadería.\nEn el bol de una amasadora tipo Kitchen Aid, ponemos la harina, la miel y el agua con la levadura que hemos disuelto. Ponemos a funcionar la máquina a velocidad media y, sin dejar de amasar, vamos añadiendo el resto del agua y la sal.\nFinalmente, añadimos el aceite poco a poco, dejándolo caer en forma de hilo mientras la máquina sigue amasando.\nEnharinamos ligeramente la mesa de trabajo, volcamos la masa, la tapamos y la dejamos reposar media hora.\nPasado ese tiempo trabajamos la masa con las manos, plegándola una y otra vez sobre sí misma hasta formar una bola de masa lisa.\nPonemos nuestra bola de masa en un bol limpio ligeramente engrasado y enharinado, lo tapamos con papel film y dejamos reposar durante unas ocho horas.\n02: Formar las pizzas\nDividimos la masa - que habrá aumentado mucho de tamaño -y formamos 4 bolas de idéntico tamaño que estiraremos sobre la mesa enharinada con ayuda de las manos.\nPasamos las bases de nuestras pizzas a una bandeja forrada con papel de horno, las tapamos con un paño limpio y la dejamos reposar una hora.\nMientras reposa la masa encendemos el horno a 250-300ºC -al máximo que alcance nuestro horno de casa- para que vaya precalentándose. Si tenemos una piedra para hornear pizzas, la ponemos desde ese momento en la parte inferior del horno.\nTambién aprovechamos para sacar la mozzarella de la nevera. La apretamos bien y la dejamos sobre un colador para que suelte el máximo líquido posible.\n03: Colocar los ingredientes y hornear la pizza\nSazonamos el tomate mezclándolo con el aceite de oliva virgen extra, el orégano y sal al gusto. Lo extendemos sobre las bases de pizza e introducimos estas en la parte inferior del horno precalentado a la máxima temperatura.\nDejamos hornear durante unos 10 minutos, las sacamos del horno y repartimos sobre ellas la mozzarella cortada en rodajas. Introducimos de nuevo el horno durante unos siete u ocho minutos hasta que el queso esté completamente fundido.\nSacamos del horno y repartimos por encima las hojas de albahaca.","img" : "../../../../assets/imagenes/Comida-Italiana/pizza.jpg","pais" : "italianas"},

{"nombre" : "Ravioles","ingredientes1" : "250 g de harina\n1 pizca de sal\n1 cucharadita de aceite de oliva\n3 huevos\n1 taza de agua\n225 g de queso ricotta\n100 g de queso crema","ingredientes2" : "50 g de queso mozzarella\n50 g de queso provolone\n1/4 manojo de perejil\n3 tazas de salsa para pasta.","preparacion" :"En una superficie enharinada, haz una montaña de harina con la sal. En un tazón bate 2 huevos, aceite de oliva y 2 cucharadas de agua.\nVierte la mezcla en la harina y amasa hasta que tengas un bollo que no se pegue. Déjala reposar envuelta en plástico adherente por 1 hora.\nMientras tanto En un tazón, mezcla los quesos mozzarella, ricotta, provolone, queso crema, perejil picado y 1 huevo. Reserva. En una cacerola, calienta la salsa de tomates con ajo finamente picado y aceite de oliva.\nEstirar la masa y aplica el resto del huevo batido. Coloca relleno dejando un espacio de 2cm entre una y otra. Cubre formando cada ravioli y sella los bordes de cada raviol.\nEn una ola con agua y sal incorpora los ravioles y cocina hasta que suban a la superficie, unos 4 u 8 minutos. Retira y ponlos a hornear en una charola por 5 minutos a 190°\nSirve acompañando de la salsa de tomate.","img" : "../../../../assets/imagenes/Comida-Italiana/ravioles.jpg","pais" : "italianas"},

{"nombre" : "Risotto","ingredientes1" : "1 cucharada de aceite de oliva o mantequilla","ingredientes2" : "1 cebolla mediana finamente cortada en cubitos\n1 ½ taza de arroz Arborio\n4 tazas de caldo pollo o verduras\n1 cucharada de mantequilla dulce (opcional)\n3 cucharadas de queso parmesano recién rallado + extra para servir","preparacion" :"Coloque el caldo a ebullición sobre una llama alta. Gire la llama hacia abajo y deje a un lado en la parte posterior de la estufa.\nEn un wok o horno holandés, calentar el aceite de oliva a fuego medio-alto. Añadir las cebollas y saltear hasta que sean suaves y transparentes, pero sin color unos 5 minutos. Agregue el arroz y cocine hasta que los granos se vuelvan transparentes en los bordes, aproximadamente 1 minuto.\nAñada un cucharón de caldo al arroz y cocine agitando hasta que haya sido absorbido. Continúe agregando el caldo, 1 cucharón a la vez, revolviendo todo el tiempo hasta que el arroz esté al dente y cremoso, alrededor de 15 a 20 minutos. Reserve la última cucharada. Agregue las verduras crudas, por ejemplo, espárragos, cuando el caldo esté casi evaporado o con el segundo al último cucharón si está cocido o congelado.","img" : "../../../../assets/imagenes/Comida-Italiana/risotto.jpg","pais" : "italianas"},

{ "nombre" : "Spagetti","ingredientes1" : "1 paquete de espagueti\n1/4 de crema agria\n1 taza de puré de jitomate\n1/4 de mantequilla","ingredientes2" : "1 cubo de sazonador de pollo\nQueso parmesano\nSal y pimienta al gusto","preparacion" :"Hierve 2 litros de agua y, cuando esté en su punto, agrega 2 cucharadas de sal. Posteriormente, cuece la pasta hasta que esté blanda.\nRetira del fuego, cuela la pasta y desecha el agua.\nHierve el puré de jitomate a fuego lento y añade la crema, la mantequilla y el cubo sazonador.\nVierte el espagueti en la salsa y mezcla.\nSirve. Espolvorea con el queso parmesano al gusto.","img" : "../../../../assets/imagenes/Comida-Italiana/spagetti.jpg","pais" : "italianas"},
{
"nombre" : "Tiramisu",
"ingredientes1" : "5 yemas de huevo\n1/2 tazas de azúcar glass, para las yemas\n2 cucharadas de vino, dulce\n1 ralladura de naranja\n2 paquetes de queso mascarpone, (226 g c/u) batido previamente un poco, para que esté suave",
"ingredientes2" : "5 claras de huevo\n1 pizca de sal \n1 paquete de soleta\n2 cucharadas de vino, dulce\n1/2 tazas de cocoa, para decorar",
"preparacion" :"Para la crema: bate las yemas con el azúcar, 2 cucharadas de vino dulce y la ralladura de naranja por 5 minutos, debes obtener una consistencia esponjosa y tersa. Luego mezcla de manera envolvente con el queso mascarpone y reserva.\nAparte, bate las claras con la pizca de sal por 5 minutos, hasta que doblen su volumen (punto de turrón) y añádelas de forma envolvente a la mezcla de queso mascarpone. Reserva.\nMezcla el café con el vino y reserva.\nRemoja las soletas en el café y acomódalas en un molde formando una base, para después cubrirla con la crema de mascarpone. Repite el proceso hasta llenar el molde, cubre por completo con crema y refrigera.\nDecora con cocoa espolvoreada, corta una rebanada, sirve y disfruta.",
"img" : "../../../../assets/imagenes/Comida-Italiana/tiramisu.jpg",
"pais" : "italianas"
},
{
        "nombre" : "Pastel Italiano",
        "ingredientes1" : "2 tazas de harina de todo uso 1 cucharadita de bicarbonato de sodio 1/2 cucharadita de polvo de hornear 1 tazas ( 2 barritas ) de mantequilla suavizada 1 1/2 tazas de azúcar granulada 1/2 taza de azúcar morena\n 2 cucharaditas de extracto de vainilla\n 1/2 cucharadita de extracto de almendra\n 5 huevos\n 1 taza de suero de leche\n 14 onzas de coco rallado\n 1 1/2 tazas de nuez tostada",
       "ingredientes2" : "2 quesos crema de 8 onzas cada uno\n 1 taza ( 2 barritas ) de mantequilla\n 2 libras de azúcar glass\n 2 cucharaditas de extracto de vainilla\n 1/2 cucharadita de extracto de almendra\n 1/2 taza de coco rallado\n 1/2 taza de nueces tostadas\n",
        "preparacion" :"Precalentar el horno a 180°C. Preparar 3 moldes redondos para pastel de 9 pulgadas cada uno, poniéndoles manteca vegetal, mantequilla o aceite en spray para cocinar y harina, checando que queden muy bien cubiertos para evitar que se pegue el pastel y reservar. \nTamizar la harina, el bicarbonato de sodio y el polvo para hornear, todos juntos. En un bowl de una batidora eléctrica, batir hasta acremar la mantequilla suavizada, el azúcar granulada, el azúcar morena, el extracto de vainilla y el extracto de almendras, hay que batir hasta que la mezcla tome un color beige claro y esté cremosa aproximadamente de 3 a 4 minutos. \nAgregamos los huevos, uno a uno batiendo bien después de cada adición. Luego hay que agregar los ingredientes secos que son la harina, el bicarbonato de sodio y el polvo de hornear con el suero de leche, alternadamente. Batimos hasta que los ingredientes estén perfectamente combinados.\n Después mezclamos en un bowl pequeño mezclamos la mitad del coco rallado con una    taza de nueces, esto lo hacemos con una espátula o una cuchara. Dividimos la mezcla de la masa en tres partes iguales y la ponemos en los moldes previamente engrasados y enharinados.\n Los metemos a hornear por aproximadamente 25 a 30 minutos o hasta que al insertar un palillo en el centro del pan éste salga limpio. Luego los ponemos a que se enfrien completamente sobre una rejilla para enfriar.\n Para hacer el frosting: Batir juntos el queso crema y la mantequilla hasta que la mezcla esté suave, esponjosa y tome un color amarillo claro. Luego agregamos la vainilla y de una manera gradual, poco a poco, agregamos el azúcar glass, batimos hasta que la mezcla esté suave y cremosa.\n Ponemos los panes en un plato y entre cada pan ponemos frosting como relleno, los acomodamos para que queden las capas bien alineadas y embetunamos todo el pastel, ponemos frosting en la parte superior y por los lados y rociamos la parte superior, después de ponerle también frosting, con nueces. \nEn los lados le ponemos e   l coco dorado y un poco de nueces y así terminamos de decorar nuestro pastel italiano de crema",
        "img" : "../../../../assets/imagenes/Comida-Italiana/pastel.jpg",
        "pais" : "italianas"
      },
      
      {
        "nombre" : "Torta Caprese",
        "ingredientes1" : "200 g de chocolate amargo \n 5 huevos, separados y a temperatura ambiente\n 1 pizca de sal\n 180 g de azúcar estándar\n 200 g de almendras molidas\n 25 g de cocoa en polvo\n",
       "ingredientes2" : "1 cucharadita de polvo para hornear\n Azúcar glass",
        "preparacion" :"Derrite el chocolate en el microondas o a baño María. Reserva. Precalienta el horno a 170 °C. Forra con papel para hornear el fondo de un molde desmontable de 22 centímetros.\n Bate la mantequilla con el azúcar estándar en un tazón, hasta que se esponje. Agrega las yemas de huevo, una por una, batiendo bien después de cada adición. Agrega las almendras y envuelve con cuidado en el batido de mantequilla. Incorpora el chocolate, revolviendo muy bien.\n Bata las claras de huevo con la sal, hasta alcanzar el punto de turrón. Cierne la cocoa junto con el polvo para hornear; vierte dentro de la masa y revuelve con cuidado. Por último, envuelve las claras batidas.\n Vierte la masa dentro del molde y distribuye uniformemente. Hornea en el horno precalentado entre 50 y 55 minutos, hasta que el pastel pase la prueba del palillo. \nDespués de los primeros 30 minutos de cocción, revisa el pastel y si la superficie se ve seca, tapa con papel aluminio mientras termina de cocerse. Una vez cocido el pastel, apaga el horno y deja el pastel adentro con la puerta abierta para que se entibie. \nColoca el pastel tibio sobre una rejilla enfriadora y deja que se enfríe completamente. Ya frío, vierte sobre un plato y retira el papel con cuidado. Voltea de nuevo sobre otro plato y espolvorea con azúcar glass.",
        "img" : "../../../../assets/imagenes/Comida-Italiana/torta caprese.jpg",
        "pais" : "italianas"
      },
      

{
        "nombre" : "Dorayaki",
        "ingredientes1" : "Huevos 2\n Azúcar 50 g\n Miel 15 ml\n Harina de repostería 85 g\n Sal una pizca\n Levadura química 2 ml\n Agua 40 ml\n Aceite de oliva virgen extra\n Anko o crema de chocolate para rellenar",
        "ingredientes2" : "",
        "preparacion" :"Disponer los huevos en un cuenco con el azúcar y la miel. Batir con una batidora de varillas hasta que doble o casi triplique su volumen, y tenga un color pálido y textura espesa. Tamizar encima la harina con la levadura y una pizca leve de sal. Mezclar con movimientos envolventes y suaves. Incorporar el agua y tapar.\n Dejar reposar al menos 15 minutos a temperatura ambiente. Preparar una plancha o buena sartén antiadherente engrasándola ligeramente con aceite de girasol o mantequilla fundida. Calentar a fuego medio y añadir cucharones de masa, dando forma circular con el dorso de una cuchara.\n Cocinar hasta que salgan burbujas, deslizar por abajo una espátula y dar la vuelta. Cocinar hasta que esté bien dorado y retirar. Continuar hasta terminar la masa. Untar la mitad de las tortitas con anko, chocolate o crema y formar los dorayakis uniendo con el resto.",
        "img" : "../../../../assets/imagenes/Comida-Japonesa/dorayaki.jpg",
        "pais" : "japonesas"
      },
      {
        "nombre" : "Gyosa",
        "ingredientes1" : "1 paquete de pasta para Gyoza (50 piezas aprox.)\n 400 g. de carne de cerdo picada\n 150 g. de col china\n 50 g. de cebolleta\n 2 dientes de ajo picados\n",
        "ingredientes2" : "1 cucharada de jengibre rallado\n 1 cucharada de salsa de soja\n 1 cucharadita de sal\n 1/2 cucharadita de azúcar\n 1/2 cucharada de maicena\n un poco de aceite de sésamo",
        "preparacion" :"┃Paso 1\n Picamos la cebolleta y la col china. Las reservamos para luego.\n ┃Paso 2\n En un bol ponemos el cerdo picado, el ajo, el jengibre, las salsa de soja, la sal, el azúcar, la maicena, el aceite de sésamo y lo mezclamos todo bien hasta que quede pegajoso.\n ┃Paso 3\n Añadimos la cebolleta y la col china y lo volvemos a mezclar. Lo cubrimos con un film y lo dejamos en la nevera unos 20 minutos.\n ┃Paso 4 : Rellenar las Gyozas\n a) Cogemos una pieza de pasta para Gyoza y en el centro ponemos una cucharadita de nuestro relleno.\n b) Mojamos con los dedos la parte exterior de la pasta, la doblemos por la mitad y vamos cerrándola con los dedos.\n Yo hago desde la mitad, 3 pliegues a cada lado, aunque también podéis empezar a plegar por un lado y terminar en el otro. Para terminar, presionamos un poco los pliegues para que no se abran.\n Mientras vamos haciendo el resto, las ponemos en un plato y las cubrimos con un trapo húmedo para que no se sequen.\n ┃Paso 5: Planchar las Gyozas\n En una sartén extendemos un chorrito de aceite vegetal y ponemos nuestras gyozas. Cuando estén tostadas por la base, les añadimos un chorrito de aceite de sésamo y ponemos agua para cubrir bien todo el fondo. Yo además le añado a éste agua una cucharadita de maicena para que se forme una costra crujiente en la base.\n ┃Paso 6\n Tapamos la sartén y dejamos cocinar hasta que se evapore el agua, tardará entre 8 y 10 minutos.\n Una vez se ha evaporado el agua de la sartén, las gyozas quedarán tostadas y crujientes en la base y bien cocinadas pero más blanditas por arriba, las ponemos en un plato y ya están listas para comer, las acompañamos con nuestra salsa.\n ┃Paso 7: Prepara la salsa\n En un bol pequeño mezclamos la salsa de soja, el vinagre de arroz y un poco de aceite de sésamo, removemos bien y ya está lista.",
        "img" : "../../../../assets/imagenes/Comida-Japonesa/gyoza.jpg",
        "pais" : "japonesas"
      },
      {
        "nombre" : "Omuraisu",
        "ingredientes1" : "3 huevos\n 30 gr de pollo\n Media cebolla pequeña\n Un puñado de champiñones\n 60 gr de arroz cocido japonés\n 1 cucharada de vino blanco\n Ketchup\n Sal y pimienta\n Aceite para freír.",
        "ingredientes2" : "",
        "preparacion" :"En primer lugar, prepara los ingredientes sólidos. Corta la cebolla en juliana o tiras finas, el pollo en dados pequeños y los champiñones en láminas y luego por la mitad.\n Seguidamente, caliente un poco de aceite en una sartén y fríe la cebolla, el pollo y los champiñones a fuego medio. \n Cuando la cebolla esté transparente, añade un par de cucharadas de ketchup, el arroz cocido y el vino blanco. Añade sal y pimienta al gusto. \n Aparte, bate los huevos. Caliente una sartén mediana con un poco de aceite. Cuando esté caliente, echa los huevos batidos y repártelos por toda la sartén. Con unos palillos de cocina puedes ayudar a que se vaya cocinando todo el huevo. \n Cuando el huevo esté casi listo, pero no del todo, apaga el fuego. Añade entonces la mezcla de arroz en uno de los extremos. \n Finalmente, dobla la tortilla con ayuda de una espátula o de la manera que te resulte más fácil. Sirve la tortilla haciendo un dibujo con ketchup en el centro de la misma. Sí, este paso es totalmente opcional, pero si has estado en Japón y has comido omuraisu, te habrás dado cuenta de que siempre viene con un dibujo hecho con el ketchup. Generalmente, además, es un corazón.",
        "img" : "../../../../assets/imagenes/Comida-Japonesa/omuraisu.jpg",
        "pais" : "japonesas"
      },
      {
        "nombre" : "Onigiri",
        "ingredientes1" : "Dos medidas de arroz japonés blanco cocido (la cantidad variará dependiendo del número de onigiri que quieras preparar).\n Láminas de alga seca nori.\n Relleno 1: Atún y mayonesa.\n Relleno 2: Copos de bonito seco katsuobushi y salsa de soja.\n Agua.\n Una pizca de sal.\n Una pizca de sésamo blanco.",
        "ingredientes2" : "",
        "preparacion" :"En primer lugar, partimos de la base de que tienes ya arroz cocido y reposado en la suihanki. Si no tienes, lo habrás cocinado en olla y lo habrás dejado reposar igualmente.\n Seguidamente, prepara los ingredientes que vayas a necesitar para rellenar y finalizar los onigiri. En este caso, prepara un cuenco con atún en conserva y mayonesa y otro con copos de bonito y salsa de soja.\n Corta las láminas de alga nori en tiras de 2 o 3 cm de ancho y unos 10 cm de longitud. \n A continuación, dale forma a los onigiri. Si tienes moldes para onigiri, sigue las instrucciones de los mismos: moja con agua los bordes, añade el arroz y, con la ayuda de los dedos, deja espacio suficiente para añadir el relleno, tapa con arroz, presiona y dale forma y, finalmente, extrae del molde.\n Si no tienes moldes, usa las manos. Para ello, humedécelas y espolvoréalas con sal y sésamo. Toma una porción de arroz para darle forma y ve presionando para compactarlo. Seguidamente, hazle un agujero en el medio donde pondrás el relleno y tapa con más arroz, volviendo a presionar para darle forma y que el exterior queda compacto. Intenta hacer una forma triangular aunque si no te sale, da igual.\n Para finalizar, cubre medio onigiri con las tiras de alga nori que has cortado previamente. Si los vas a comer en casa, hazlo en el último momento, junto antes de comer, para que el alga siga estando crujiente.",
        "img" : "../../../../assets/imagenes/Comida-Japonesa/onigiri.jpg",
        "pais" : "japonesas"
      },
      {
        "nombre" : "Pollo Teriyaki",
        "ingredientes1" : "4 pechugas de pollo enteras\n 1 cebolleta grande\n 200 ml. salsa de soja\n 100 ml. de Mirin\n 100 ml. de sake\n 100 g. de azúcar blanquilla\n",
        "ingredientes2" : "5 g. de piel de jengibre fresco\n 4 cucharadas de aceite de oliva suave\n Para acompañar: 250 g. de arroz basmati Sundari",
        "preparacion" :"Preparación de la salsa teriyaki:\n La salsa teriyaki se hace mezclando y calentando cuatro ingredientes: azúcar, takara mirin, salsa de soja y sake (esté último puede ser sustituido por otro tipo de alcohol) y yo además le añado la frescura del jengibre. Los ingredientes no tienen porqué estar en la misma proporción, sino que depende de la receta.\n Preparamos nuestra salsa echandoo la salsa de soja, el Mirin, el azúcar, el sake y la piel de jengibre a un cazo. Calentamos a fuego alto y removemos hasta que se disuelva el azúcar.\n Dejamos cocer durante 3 minutos removiendo de vez en cuando. Colamos la salsa y reservamos. En caso de que no queráis hacer la salsa en casa tenéis la opción de comprarla ya hecha, pero no queda igual de rico.\n Preparación del pollo teriyaki. Presentación final:\n Limpiamos las pechugas de pollo de posibles restos de grasa y venitas que pueda tener. Las troceamos en dados no demasiado pequeños.\n Como acompañamiento al pollo lo más habitual es utilizar cebolla o cebolleta fresca que se cocina con la carne. Con cualquiera de las dos conseguiremos que al final quede caramelizada gracias al azúcar de la salsa teriyaki. En este caso hemos elegido una cebolleta grande, la cortamos en juliana en tiras gruesas.\n En una sartén amplia ponemos a calentar el aceite y añadimos los trozos de pollo y la cebolleta. Doramos durante unos 5 o 6 minutos. Añadimos la salsa teriyaki que tenemos preparada y dejamos cocer a fuego medio durante 15 minutos.\n Veremos que el pollo está brillante, como lacado con la salsa, y esta casi se ha consumido. Servimos el pollo con arroz blanco, si os atrevéis os dejo con esta receta de arroz basmati, ideal para este plato.",
        "img" : "../../../../assets/imagenes/Comida-Japonesa/pollo teriyaki.jpg",
        "pais" : "japonesas"
      },
      {
        "nombre" : "Ramen",
        "ingredientes1" : "Para el caldo:\n 1 ½ ℓ de caldo de pollo 1 poro mediano cortado en trozos medianos.\n 2 cebollas cambray cortadas en trozos medianos.\n 6 hongos shiitake deshidratados y cortados en trozos medianos.\n 10 g de jengibre fresco.\n 1 diente de ajo.\n 1 anís estrella.\n 1 lámina de alga nori.\n 4 rebanadas gruesas de tocino.",
        "ingredientes2" : "Para el montaje:\n 2 porciones de fideos de ramen\n 30 ml de base de soya y miso\n 2 huevos cocidos, tiernos\n 10 g de germen de soya\n 2 ramas de cebollín finamente picadas\n 30 g de elote amarillo desgranado, cocido\n alga nori cortada en chiffonade, al gusto ajonjolí negro, al gusto\n ajonjolí negro, al gusto.",
        "preparacion" :"Caldo.\nPonga el caldo de pollo sobre el fuego, incorpore el resto de los ingredientes y deje que hierva durante 30 minutos.\nCuele el caldo y póngalo nuevamente sobre el fuego durante otros 30 minutos.\n Para el Montaje.\n Hierva los fideos de ramen durante 8 minutos o hasta que su textura sea flexible y suave. Distribuya la base de soya y miso en dos tazones. Distribuya los fideos cocidos en los tazones y mezclelos muy bien con la base de soya y miso, sirva el caldo caliente sobre ellos. Corte los huevos cocidos por la mitad. Coloque los huevos cocidos, el germen de soya, el cebollín picado y los granos de elote sobre los tazones, espolvoree el ajonjolí negro.",
        "img" : "../../../../assets/imagenes/Comida-Japonesa/ramen.jpg",
        "pais" : "japonesas"
      },
      
      {
        "nombre" : "Sashimi",
        "ingredientes1" : "1 medallón de atún Dolores®, Tuny®\n 1 cucharadita de ajonjolí\n 1 cucharadita de ajonjolí negro\n 2 cucharadas de salsa de soya\n 1 cucharadita de aceite de ajonjolí",
        "ingredientes2" : "1 cucharada de jugo de limón\n 1 cucharada de cebollín\n 1 cucharadita de jengibre, rallado",
        "preparacion" :"Cortar el atún congelado en láminas delgadas.\n Mezclar la soya y el limón y el jengibre rallado.\n Coloca el atún en un plato.\n Sirve la salsa encima del atún y unas gotas de aceite de ajonjolí.\n Espolvorea el ajonjolí y el cebollín picado.",
        "img" : "../../../../assets/imagenes/Comida-Japonesa/sashimi.jpg",
        "pais" : "japonesas"
      },
      {
        "nombre" : "Soba",
        "ingredientes1" : "1.5 litros de agua\n 1 trozo grande de kombu unos 15 – 18 gramos\n 2 setas shiitake secas\n 300 gramos de fideos soba\n 175 ml de salsa de soja\n 120 ml de mirin\n 1 cucharada de azúcar\n 1 cucharada de semillas de sésamo opcional\n 2 cebolletas picadas (opcional).",
        "ingredientes2" : "",
        "preparacion" :"La noche anterior poner el agua, kombu y setas en un bol grande. Tapar y dejar en la nevera hasta que vayas a preparar la sopa.\n Llevar una olla de agua a ebullición y añadir los fideos. Hervir según las indicaciones del producto hasta que estén al dente. Escurrir y lavar con agua fría, frotándolos suavemente para sacar el almidón. Volver a escurrir y reservar.\n Retirar el kombu y las setas del agua y llevar el caldo a ebullición. Añadir la salsa de soja, mirin y azúcar y mezclar bien para disolver el azúcar. Dividir la soba en cuatro bols y servir.",
        "img" : "../../../../assets/imagenes/Comida-Japonesa/soba.jpg",
        "pais" : "japonesas"
      },
      
      {
        "nombre" : "Sopa de misu",
        "ingredientes1" : "1 l de agua o caldo dashi.\n 15 g de alga wakame deshidratada.\n 3 cucharadas de miso.\n 200 g de tofu.\n 50 g de puerro.\n 50 g de cebolleta.\n Fideos soba (opcional).",
        "ingredientes2" : "",
        "preparacion" :"Ponemos el agua en una olla y la llevamos a ebullición. Una vez comience a hervir, sacamos un poco de agua a un vaso para disolver después el miso.\n Metemos en la olla el alga wakame y lo dejamos cocer 5 minutos. Después echamos el tofu cortado en dados pequeños de 1 cm aproximadamente y la verdura en trocitos pequeños. Cocinamos la sopa otros 5 minutos.\n Disolvemos el miso en agua y, cuando la sopa esté lista, la retiramos del fuego y le añadimos el agua con miso disuelto. Lista para servir.\n Si te gusta con fideos soba y de manera opcional, solo tienes que seguir las instrucciones del fabricante para cocerlos. Una vez los tengas pones una pequeña cantidad en cada cuenco vertiendo la sopa de miso por encima, de manera similar a cuando hacemos sopa ramen en casa.",
        "img" : "../../../../assets/imagenes/Comida-Japonesa/sopa de misu.jpg",
        "pais" : "japonesas"
      },
      
      {
        "nombre" : "Sushi empanizado",
        "ingredientes1" : "1/2 tazas de arroz de sushi.\n suficiente de agua, fría para enjugar el arroz.\n 3 tazas de agua, caliente para la cocción del arroz.\n 4 cucharadas de vinagre de arroz.\n 3 cucharaditas de azúcar.\n 1 cucharadita de sal.\n 5 algas nori.\n 1 taza de queso crema, en bastones para el relleno.\n 1 taza de pepino, en bastones, sin cáscara para el relleno.\n 1 taza de zanahoria, en bastones, sin cáscara para el relleno.",
        "ingredientes2" : "1 1/2 tazas de surimi, en bastones para el relleno.\n 1 taza de harina, para empanizar.\n 2 huevos, para empanizar.\n 2 tazas de panko, para empanizar.\n suficiente de aceite vegetal.\n suficiente de pepino, en tiritas delgadas para decorar.\n suficiente de ajonjolí, garapiñado para decorar.\n suficiente de soya, con chile serrano para acompañar.",
        "preparacion" :"Remoja el arroz en agua fría por 5 minutos, escurre y repite tres veces.\n En una ollita con tapa, cocina el arroz con 3 tazas de agua caliente por 10 minutos, a fuego bajo. Retira del fuego. Extiende sobre una charola y enfría por 15 minutos.\n Mezcla el vinagre de arroz con el azúcar y la sal. Luego vértelo sobre el arroz frío e incorpora. Reposa unos minutos.\n Arma el rollo de sushi: sobre un tapete de bambú con plástico adherente, coloca una pieza de alga Nori; con tus manos húmedas, cubre con arroz; da la vuelta y rellena con los bastones de queso crema, pepino, zanahoria y surimi. Cierra con ayuda del tapete y dale forma al apretarlo. Refrigera por 10 minutos.\n Para empanizar el rollo, cúbrelo con la harina, pásalo por el huevo y empanízalo con el pan molido. Fríe en aceite vegetal caliente. Escurre.\n Corta el rollo en rodajas de 1 centímetros de ancho. Coloca en un plato extendido, acompaña con pepino y decora con ajonjolí. Disfruta con salsa de soya y chile serrano.",
        "img" : "../../../../assets/imagenes/Comida-Japonesa/sushi empanizado.jpg",
        "pais" : "japonesas"
      },
      
      {
        "nombre" : "Tako yaki",
        "ingredientes1" : "225 gr Harina de takoyaki\n 2 Huevos\n Aceite de oliva o girasol\n 1/4 Repollo\n 200 gr Pulpo hervido y troceado en pequeños tacos\n 700 ml Agua\n 1/2 Cebolla picada fina\n Benishōga (jengibre encurtido)",
        "ingredientes2" : "Mayonesa japonesa o ligera\n Salsa Tonkatsu\n Aonori (algas marinas verdes comestibles)\n Katsuobushi (escamas de bonito seco).",
        "preparacion" :"Lo primero que tendrás que hacer es preparar los ingredientes sólidos de la receta: Se corta el pulpo en pequeños trocitos (que puedan caber dentro de tus bolas de Takoyaki); se pica el repollo en trozos muy pequeños, la cebolla y el benishōga.\nPara el siguiente paso necesitarás un cuenco grande, en donde se añadirá la harina, los huevos y el agua. Se mezclan bien hasta que se obtenga una mezcla homogénea y cremosa, no tiene que quedar muy liquida (si ha quedado muy liquida puedes agregar un poco más de harina hasta que quede más cremosa).\nA la mezcla se le añade benishōga troceado, la cebolla y el repollo. Sigue mezclando muy bien hasta que los ingredientes se encuentren bien distribuidos por toda la mezcla.\nAhora debes comenzar a calentar la plancha Takoyaki e ir añadiendo aceite de oliva o de girasol en cada uno de los huecos en los que colocaras un Takoyaki, para evitar que las bolitas queden pegadas y se rompan al despegarlas.\nCuando esté bien caliente se añade la mezcla a cada uno de los huecos y se pone un trocito de pulpo encima de ellas. Si queda un poco más de espacio, es recomendable echar más mezcla por encima.\nDespués de unos minutos se verá que ese lado del buñuelo ha quedado listo, así que usando un pincho y con mucho cuidado tendremos que girar los Takoyaki. El movimiento tiene que ser suave y rápido. La idea es conseguir una bolita de pulpo dorada y perfecta. Es posible que al primer intento dañes un poco las bolitas, así que procura hacerlo con mucho cuidado y delicadeza.\nCuando estén listos por ambos lados, las bolitas se colocan en un plato y se les echa encima mayonesa, Katsuoboshi, salsa Takoyaki (Tonkatsu) y Aonori. Les puedes echar a tu gusto y de una forma que el plato se vea bonito. Deja que tu creatividad aparezca y adorna el plato como mejor te parezca, pero lo más importante es que disfrutes el gran sabor de este plato típico de la cocina japonesa.",
        "img" : "../../../../assets/imagenes/Comida-Japonesa/tako yaki.jpg",
        "pais" : "japonesas"
      },
      
      {
        "nombre" : "Tempura camarones",
        "ingredientes1" : "500 gramos de camarón grande\n 3/4 tazas de agua\n 1 taza de harina para hornear\n 1 cucharada de polvo para hornear\n 1/4 cucharadas de sal\n 1/4 tazas de caldo de pollo\n 4 cucharadas de salsa de soya\n 2 cucharadas de agua",
        "ingredientes2" : "1 cucharada de vinagre de arroz\n 2 cucharadas de azúcar\n 1 cucharada de jengibre fresco, picado\n 1/2 tazas de aceite vegetal.",
        "preparacion" :"Ponemos el agua en una olla y la llevamos a ebullición. Una vez comience a hervir, sacamos un poco de agua a un vaso para disolver después el miso.\n Metemos en la olla el alga wakame y lo dejamos cocer 5 minutos. Después echamos el tofu cortado en dados pequeños de 1 cm aproximadamente y la verdura en trocitos pequeños. Cocinamos la sopa otros 5 minutos.\n Disolvemos el miso en agua y, cuando la sopa esté lista, la retiramos del fuego y le añadimos el agua con miso disuelto. Lista para servir.\n Si te gusta con fideos soba y de manera opcional, solo tienes que seguir las instrucciones del fabricante para cocerlos. Una vez los tengas pones una pequeña cantidad en cada cuenco vertiendo la sopa de miso por encima, de manera similar a cuando hacemos sopa ramen en casa.",
        "img" : "../../../../assets/imagenes/Comida-Japonesa/tempura camarones.jpg",
        "pais" : "japonesas"
      },
      
      {
        "nombre" : "Udon",
        "ingredientes1" : "400 gramos de fideos udon frescos\n 1 cucharada de aceite\n 2 dientes de ajo picados\n 1 cucharada de jengibre picado\n 2 cebolletas cortar y separar los tallos verdes de los blancos\n 150 gramos de brócoli cortado\n 150 gramos de setas shiitake cortadas\n Medio pimiento rojo cortado",
        "ingredientes2" : "60 ml de salsa de soja\n 2 cucharadas de vinagre de arroz\n 2 cucharadas de azúcar moreno\n 2 cucharadas de agua y más para cocinar al vapor\n 1 cucharada de maicena\n Semillas de sésamo para decorar",
        "preparacion" :"Mojar los fideos udon en una olla con agua caliente durante unos minutos hasta que se separen. Escurrir y reservar.\n En un bol combinar la salsa de soja, vinagre, azúcar, 2 cucharadas de agua y maicena. Reservar.\n Calentar un wok o sartén grande a fuego medio-alto. Añadir el aceite, ajo, jengibre y tallos blancos de las cebolletas. Pochar, removiendo constantemente.\n Añadir el brócoli, shiitakes, pimiento y unas 3 cucharadas de agua. Saltear, removiendo constantemente, hasta que el agua se haya evaporado. Probar las verduras para ver si están cocidas al punto, si no, añadir un poco más de agua y seguir salteando.\n Añadir los fideos udon, mezclar la salsa en el bol y verterla en la sartén. Cocinar un par de minutos, removiendo, hasta que la salsa se espese. Servir decorado con los tallos verdes de las cebolletas y semillas de sésamo.",
        "img" : "../../../../assets/imagenes/Comida-Japonesa/udon.jpg",
        "pais" : "japonesas"
      },
      
      {
        "nombre" : "Yakimeshi",
        "ingredientes1" : "2 tazas de arroz blanco\n 3 zanahorias, partidas en cubitos pequeños\n 2 calabazas, partidas en cubitos pequeños\n 1 cucharada de aceite de oliva\n 200 gramos de carne, para asar, picada en trozos pequeños\n 200 gramos de pechuga de pollo, picada en trozos pequeños",
        "ingredientes2" : "200 gramos de camarón, picado en trozos pequeños\n 1/3 tazas de salsa de soya\n 4 tazas de agua\n 1/4 cebollas, picada finamente\n 1/2 kilos de surimi, finamente picado, para el tampico\n 1/2 barras de queso crema\n 2 cucharadas de mayonesa\n 2 cebollitas cambray, finamente picada (incluye los tallos)\n al gusto de sal.",
        "preparacion" :"Para el arroz: Fríe el arroz en el aceite, cuando este un poco dorado agrega las 4 tzas de agua. Espera a que hierva, tapa y baja el fuego.\n Espera a que se consuma el agua completamente cuidando que no se pegue el arroz y apaga.\n En una sartén fríe primero el pollo con un poco de sal, reserva. En la misma sartén fríe la carne con poca sal, reserva. Por último fríe los camarones con muy poca sal y reservar.\n Agrega la cebolla y sofríe por un momento.\n Luego agrega la zanahoria y un minuto después agrega la calabaza.\n Incorpora todas las carnes, cuidando que la verdura no se cocine mucho, para que quere crujiente. Agrega el arroz y mezcla, vierte la salsa de soya e integra. Apaga en cuanto todo el arroz ya tenga el color de la salsa.\n Tampico: Con un tenedor o con los dedos deshebrar finamente el surimi.\n En un bowl mézclalo la mayonesa, queso crema, cebollita cambray. Rectifica sal y agregar si es necesario.",
        "img" : "../../../../assets/imagenes/Comida-Japonesa/yakimeshi.jpg",
        "pais" : "japonesas"
      },
      {
        "nombre" : "Pastel Japones",
        "ingredientes1" : "250 gr. de queso crema\n 50 gr. de mantequilla \n 100 ml. de leche entera\n 8 yemas de huevo\n Una pizca de sal\n El zumo de medio limón\n 70 gr. de harina \n 50 gr. de Maicena",
       "ingredientes2" : "8 claras de huevo\n 150 gr. de azúcar\n ¼ de cucharadita de crémor tártaro\n Azúcar glass para decorar",
        "preparacion" :"Batimos el queso crema, la mantequilla y la leche con el batidor plano de la Kitchen Aid durante unos 5 minutos hasta que se integre bien.\n Añadimos las yemas y seguimos batiendo hasta integrar, por último añadimos la pizca de sal y el zumo de limón. Y seguimos batiendo bien unos minutos más.\n Tamizamos la harina, la Maicena y añadimos. Seguimos batiendo con el batidor plano de la Kitchen Aid. Volcamos la mezcla en un bol amplio y reservamos.\n Si no tenemos un bol de repuesto lavamos el bol de la Kitchen  o nuestro robot para montar las claras. Recuerda que para montar las claras el bol que utilicemos tiene que estar completamente limpio\n A estas alturas vamos preparando el molde y encendemos el horno, introduciendo una bandeja con agua para que se vaya calentando para el posterior baño María. Encenderemos a 160 grados.\n En cuanto al molde yo he usado uno de 20 cm. de diámetro desmontable pero también puedes utilizar uno de 20 x 7,5 cm. En la base del ponemos papel vegetal, y después cortamos otra tira de papel vegetal y pegamos con un poco de mantequilla a los laterales del molde, \ndejando que sobresalga el papel por el borde del molde, puesto que luego sube bastante la tarta. Además forramos la base del molde y parte de los laterales con papel de aluminio para evitar que entre agua dentro del molde durante el horneado al baño maría.\n Continuamos batiendo con el batidor de globo las claras hasta que empiecen a espumar, en este punto añadimos el crémor tártaro y seguimos batiendo. \nUna vez que empiecen las claras a blanquear añadimos poco a poco el azúcar hasta que las claras empiecen a formar picos. Aunque debemos conseguir un merengue firme, no debemos pasarnos, porque si no nos costaría más integrar después.\n Una vez terminadas de montar las claras las vamos añadiendo poco a poco a la mezcla anterior que teníamos reservada hasta integrar todo.",
        "img" : "../../../../assets/imagenes/Comida-Japonesa/pastel japones.jpg",
        "pais" : "japonesas"
      },
      {
        "nombre" : "Torta Navideña",
        "ingredientes1" : "40 g de mantequilla sin sal\n 30 ml de leche entera\n 4 huevos grandes\n 120 g de azúcar\n 120 g de harina leudante\n 30 ml de Honteri Mirin",
       "ingredientes2" : "750 ml de nata para montar\n 40 g de azúcar\n 2 bandejas de fresas",
        "preparacion" :"Forra con papel un molde de 20 cm y precalienta el horno a 180 ºC.  Derrite la mantequilla al baño maría. Cuando se haya derretido, mézclala con la leche y reserva. En otro cuenco, casca los huevos y bátelos, luego ponlos al baño maría y bate constantemente para que no se cocinen como huevos revueltos.\n Bate hasta que la mezcla esté a la misma temperatura que tu dedo y luego retírala del fuego. En una batidora de repostería equipada con varillas, añade la mezcla de huevo y bate a alta velocidad (nivel 10) hasta que la mezcla esté esponjosa (unos 2 minutos).\n La masa debe estar suelta pero ser espesa y brillante. Cuando tenga un color pálido, esté esponjosa y haya triplicado su volumen, reduce la batidora a baja velocidad (nivel 4) durante varios segundos y luego deja de batir.\n Saca un poco de la mezcla y viértela sobre el resto: si se queda encima de la mezcla, has llegado al «punto letra». Sácala de la batidora. Añade la mitad de la harina y mezcla con suavidad pero completamente. Para ello, rota el cuenco lentamente a la vez que mueves tus varillas en un movimiento hacia abajo y luego hacia arriba.\n Añade el resto de la harina y mezcla suavemente para asegurarte de que toda la harina se incorpore rápidamente para que tu mezcla no se desinfle.\n Saca una cucharada de la masa del cuenco, añádela a la mezcla de mantequilla y leche y mezcla muy bien. Vuelve a añadir la mezcla a la masa vertiéndola sobre la espátula de silicona (esto evita que la mezcla deshinche la masa). Incorpora suavemente. Cuando levantes la espátula, la masa debe caer como una cinta.\nAhora vierte la masa en el centro del molde, justo desde arriba. Debes evitar introducir aire extra en la masa en este punto. Recoge la masa sobrante del cuenco y viértela en los bordes del molde, no en el centro.\n Da golpecitos al molde en la encimera para liberar las burbujas de aire. En el horno precalentado, hornea a 180 ºC (o a 160 ºC para un horno de convección) durante 20-25 minutos.\n Para comprobar que el bizcocho está hecho, al pinchar en el medio, el palillo debe salir limpio. Tan pronto como saques el molde del horno, dale golpecitos en la encimera, lo que alterará la masa e impedirá que se desinfle.\n Con cuidado, saca el bizcocho, colócalo en una rejilla de enfriamiento y cúbrelo con un trapo mojado hasta que se enfríe para mantenerlo húmedo.\n Calienta el Honteri y pinta con él el fondo de la tarta con un pincel de repostería: esto ayudará al bizcocho a retener la humedad. Ahora bate toda la nata y prepara las fresas; corta la mitad de las fresas por la mitad.\n Corta la tarta en dos por la mitad y coloca la mitad de las fresas cortadas a lo largo de la mitad inferior. Rellena todos los huecos con nata montada para crear una superficie plana. \nDespués coloca la mitad superior del bizcocho encima y procede a cubrir todos los lados y la parte superior con la nata. Cuando esté listo, alísalo con una espátula y refrigera la tarta durante 1 hora antes de añadir las últimas fresas y toques de nata.",
        "img" : "../../../../assets/imagenes/Comida-Japonesa/pastel navidad.jpg",
        "pais" : "japonesas"
      },
       
{
        "nombre" : "Abalon en lecho de lechuga",
        "ingredientes1" : "1 lata de abalones (aquí no encontraremos fresco)\n 50 gr. de champiñones\n 1 cogollo de lechuga\n 2 cucharadas de aceite vegetal\n 6 cebolletas pequeñas\n 6 discos finos de jengibre\n 6 cucharadas de caldo de pescado",
       "ingredientes2" : "1 cucharada de salsa de ostras\n 1 cucharada de salsa de soya\n 1 cucharadita de maicena\n 1 cucharita de azúcar\n 1 cucharadita de aceite de sésamo",
        "preparacion" :"Cortaremos los champiñones por la mitad. Blanquearemos la lechuga, escaldándola en agua hirviendo, durante 1 minuto, sacarla y escurrirla bien, poniéndola en el fondo de una fuente.\n En un wok, calentaremos las 2 cucharadas de aceite, una vez caliente saltearemos las cebolletas, cortadas bastamente, usando también parte de los tallos verdes, y el jengibre cortado en tiritas.\n Una vez salteada la verdura, añadiremos los abalones, cortados en discos finos, salteándolos un poco. Añadiremos todos los ingredientes de la salsa. Cuando la salsa engorde un poco, verteremos todo sobre el lecho de lechuga.\n Podemos emplear otras verduras de hojas verdes. En lugar de abalones, también podemos elaborar este plato, con el músculo blanco de las vieiras, al ser este músculo más tierno que el de los abalones, podemos ponerlo entero o cortado por la mitad.",
        "img" : "../../../../assets/imagenes/Comida-China/abalonenlechodelechuga.jpg",
        "pais" : "chinas"
      },
      {
        "nombre" : "Arroz congee",
        "ingredientes1" : "800 g. de lomo de bacalao desalado\n 2 cebollas medianas \n 5 pimientos choriceros \n 4 pimientos morrones \n 1 rebanada de pan de pueblo \n 3 dientes de ajo\n 4 cucharadas de salsa de tomate triturado natural",
       "ingredientes2" : "2 vasos de caldo de pescado\n 50 g. de harina de trigo\n Aceite de oliva virgen extra\n Sal",
        "preparacion" :"En una olla grande, agregue el caldo (o agua) y el arroz. Cúbralo y cocínelo durante aproximadamente 1½ - 2 horas a fuego lento, hasta que el arroz y el agua hayan formado unas gachas.\n Las gachas se pueden consumir de forma líquida o más compacta, en cuyo caso, será necesario extender la cocción. Después de 2 horas, todavía queda algo de líquido, y las gachas siguen siendo bastante líquidas.\n Vierta las gachas en tazones. Sazone con salsa de soja y aceite de sésamo, si lo desea.",
        "img" : "../../../../assets/imagenes/Comida-China/Arroz congee.jpg",
        "pais" : "chinas"
      },
      {
        "nombre" : "Chop Suey",
        "ingredientes1" : "2 pechugas de pollo\n ½ pimiento rojo\n 1 calabacín pequeño\n 1 cebolla\n 1 zanahoria grande\n 180 g. brotes de soja \n 1 cucharadita de jengibre fresco picadito",
       "ingredientes2" : "1 diente de ajo\n 150 ml. salsa de soja\n 1 cucharadita de aceite de sésamo\n Aceite de girasol para freír",
        "preparacion" :"Pelamos la cebolla y la cortamos en juliana gruesa. Lavamos y cortamos en bastoncitos el resto de verduras, el pimiento, la zanahoria y el calabacín. En un cuenco mezclamos la salsa de soja, con el jengibre y el ajo cortados menuditos. \nReservamos. En un wok ponemos 4-5 cucharadas de aceite de girasol. Cuando el aceite esté bien caliente incorporamos las verduras y las cocinamos a fuego fuerte, removiendo casi constantemente para evitar que se quemen.\n Si utilizamos brotes de soja frescos los incorporamos con el resto de verduras. Si los utilizamos de bote los reservamos para el final. La textura final tiene que ser más bien durita, al dente.\n Si cocinamos las verduritas todas juntas necesitaremos 10 minutos. Si lo hacemos por tandas con 4 minutos cada una será suficiente. \n Incorporamos al wok el pollo troceado y cocinamos a fuego fuerte 5 minutos. Seguimos con la incorporación del aceite de sésamo y de la salsa de soja con ajo y jengibre que tenemos reservada.\n Le damos caña al fuego, debe estar alto para que evapore rápido y quede una salsa densa. Cocinamos unos 10 minutos aproximadamente,\n depende mucho del menaje que emplees. Si os gustan los brotes de soja (opcionales) los incorporamos con la salsa cuando la añadimos al pollo. Servimos bien caliente en un cuenco acompañado con un buen tazón de arroz blanco.",
        "img" : "../../../../assets/imagenes/Comida-China/chop suey.jpg",
        "pais" : "chinas"
      },
      {
        "nombre" : "Chow mein",
        "ingredientes1" : "1 zucchini\n 1 cebolla\n 1/2 morrón rojo\n 1/2 morrón verde\n 2 dientes de ajo\n 1 cucharada de miel\n 3/4 taza de salsa de soja\n 1 paquete de fideos de arroz\n Sal y pimienta, a gusto\n Jengibre rallado, a gusto",
       "ingredientes2" : "",
        "preparacion" :"Hidratar o cocinar los fideos de arroz según indicaciones del paquete. Cortar los vegetales del tamaño deseado: cebollas en trozos, morrones en tiras, zucchinis irregulares.\n Saltear en un wok aceitado las verduras. Deben quedar crocantes. Sumar el jengibre rallado, la miel y la salsa de soja. Revolver y dejar reducir unos minutos. Sumar los fideos, revolver y servir.",
        "img" : "../../../../assets/imagenes/Comida-China/Chow mein.jpg",
        "pais" : "chinas"
      },
      {
        "nombre" : "Dim Sum",
        "ingredientes1" : "20 unidades de pasta wonton\n 200 g. de cerdo picado\n 200 g. de langostinos picados\n 2 setas shitake seso y hidratadas\n 5 g. de cebolletas (la parte verde)\n 1 cucharadita de jengibre rallado\n un poco de zanahoria para decorar\n 1/2 cucharada de maizena\n 1 cucharada de salsa de ostras",
       "ingredientes2" : "1/2 cucharada de salsa de soja ligera\n 1 pizca de pimienta blanca\n 1/2 cucharadita de aceite de sésamo\n 1/2 cucharadita de sal",
        "preparacion" :"En un bol ponemos los langostinos, la mitad de la maizena y la sal. Removemos en la misma dirección hasta conseguir una pasta pegajosa, lo tapamos y reservamos. En otro bol más grande, ponemos el cerdo, el resto de la maizena y la sal y lo removemos.\n Incorporamos la salsa de soja ligera, la salsa de ostras, el azúcar, la pimienta blanca y removemos unos 5 minutos. Le añadimos los langostinos, las setas shitake, la cebolleta, el jengibre y el aceite de sésamo. \nRemovemos otros 10 minutos hasta conseguir una masa pegajosa, lo tapamos y dejamos en la nevera durante 1 hora. Cortamos la pasta wonton en círculos o simplemente las 4 esquinas para no perder tanta pasta.\n Con la ayuda de un cuchillo, ponemos unos 25 g. de nuestro relleno en el centro de la pasta wonton y vamos cerrando la mano formando un saquito abierto, decoramos con la zanahoria y repetimos el proceso hasta terminar todas las piezas.\n En un cestillo de bambú o en cualquier recipiente para cocina al vapor, ponemos papel de horno perforado en la base y nuestras piezas encima. Las cocinamos al vapor de 8 a 10 minutos a fuego medio y listo.",
        "img" : "../../../../assets/imagenes/Comida-China/dim sum.jpg",
        "pais" : "chinas"
      },
      {
        "nombre" : "Ma po tofu",
        "ingredientes1" : "250 g de carne mixta picada\n 2 dientes de ajo\n 3 cucharaditas de fécula de patata\n 1 cucharada de salsa de ostras\n 1 cucharadita de aceite de sésamo\n 1 cucharada de salsa de soja\n Aceite de oliva\n 3 cucharaditas de pasta de guindilla picante\n 750 g de tofu firme",
       "ingredientes2" : "2 Cebolletas frescas\n 50 ml de caldo de pollo\n 1 cucharadita de cebollino picado\n 1 cucharada de ketchup\n Sal\n Ajinomoto\n Azúcar",
        "preparacion" :"En primer lugar, en un bol no metálico, ponemos la carne picada, y añadimos la salsa de ostras, la salsa de soja, una pizca de sal, azúcar, ajinomoto y el aceite de sésamo. Mezclamos con las manos y dejamos adobar 15 minutos en la nevera tapada con papel film.\n Mientras, troceamos el tofu en láminas de 1 dedo de grosor. Las cortamos en cuadrados de 1 dedo. Picamos el ajo y la cebolleta en brunoise. Reservamos. En un vaso disolvemos la fécula de patata en un poco de agua fría. Reservamos.\n En una sartén tipo wok ponemos un poco de aceite de oliva, y salteamos el ajo y la cebolleta hasta que estén dorados. Añadimos la carne adobada y la cocinamos.\n Incorporamos el caldo, la pasta de guindilla y la cucharada de ketchup, dejamos cocer un minuto y añadimos la fécula mezclada con agua para que espese la salsa. Incorporamos el tofu cortado en dados y cocemos durante 3 minutos más.\n Servimos en un plato hondo y decoramos con el cebollino picado.",
        "img" : "../../../../assets/imagenes/Comida-China/Ma po tofu.jpg",
        "pais" : "chinas"
      },
      {
        "nombre" : "Pato laqueado a la pekinesa",
        "ingredientes1" : "1 pato pequeño\n 2 anís estrellado\n 1 trocito de canela china\n ½ diente de ajo\n 1 pizca de semillas de hinojo\n 4 granos de pimienta de sichuán\n 100 ml vino de jeréz\n 1 pizca de chile rojo\n 1 trozo de jengibre fresco",
       "ingredientes2" : "Sal\n 2 cda salsa de soja\n 3 cda de miel\n ½ pepino\n ½ cebolleta\n Crepes chinas",
        "preparacion" :"En una olla grande pones suficiente agua a hervir, escaldas el pato durante 1 min. Sacas el pato del agua y dejas enfriar. Despegas la piel del pato ayudándote con una pajita soplando entre la piel y la carne del ave. La piel debe quedar completamente despegada, sin perder su forma. Atraviesas el extremo del cuello del pato con un gancho de metal, para poder colgarlo. Pones debajo del pato una cacerola. Pelas y picas el jengibre tan pequeño como puedas, puedes rallarlo. En una olla viertes el agua e incorporas la miel, el jengibre picado, la salsa de soja, el anís estrellado, la canela china, las semillas de hinojo, el chile en polvo y el vino.\n Pones sobre el fuego y cuando empiece a hervir apagas el fuego. Cuando el líquido esté todavía muy caliente, lo viertes sobre el pato colgado y te aseguras que el pato quede bien bañado.\n Una vez que la piel esté bien empapada de la salsa,  el pato tendrá un color marrón chocolate. Cuelgas el pato laqueado de Pekín en un lugar seco y fresco y lo dejas durante 5 horas Pasadas estas horas de reposo, la piel del pato deberá apreciarse seca y firme al tacto.\n Colocas el pato sobre una rejilla, por debajo pones una fuente para horno con 2 vasos de agua. Horneas a 240°C durante 20 min. Pasado este tiempo, bajas la temperatura  a 180 °C durante 1 hora.\n Una vez que haya pasado este tiempo, ya puedes sacar tu pato laqueado de Pekín del horno. Cortas en bastones finitos la cebolleta y los colocas en un bol con agua durante 10 min. Después los pones sobre un papel absorbente de cocina. Igualmente cortas el pepino.",
        "img" : "../../../../assets/imagenes/Comida-China/Pato laqueado a la pekinesa.jpg",
        "pais" : "chinas"
      },
      {
        "nombre" : "Pollo gong bao",
        "ingredientes1" : "2 pechugas de pollo deshuesadas sin piel\n 1 cucharada de aceite de cacahuete\n 8 guindillas rojas secas\n 1 cucharada de granos de pimienta de Sichuan\n 2 dientes de ajo\n 3 o 4 rodajas de jengibre fresco\n 1 cucharada de cebolleta picada\n 100 gr. de cacahuetes tostados\n 2 cucharadas de salsa de soja",
       "ingredientes2" : "1 cucharada de vino de arroz\n 1/2 cucharada de azúcar\n 1 cucharadita de salsa de soja clara\n 1 cucharadita de salsa de soja oscura\n 1 cucharadita de vinagre de arroz\n 1 cucharadita de aceite de sesamo\n 1 cucharadita de azúcar",
        "preparacion" :"Empezamos troceando las pechugas de pollo en taquitos de unos dos centímetros, y reservamos. En un bol, preparamos el adobo con; la salsa de soja, el vino de arroz y el azúcar. \nLo batimos enérgicamente, y lo vertemos encima del pollo, ya cortado, y lo dejamos macerar una media hora. Mientras, hacemos la salsa, mezclando todos los ingredientes, y reservamos.\n Echamos en un wok el aceite de cacahuete y, cuando esté bien caliente, añadimos las guindillas en dos trozos, junto con los granos de pimienta de Sichuan.\n Lo dejamos hasta que desprendan su aroma y añadimos los daditos de pollo escurridos. Cuando el pollo empiece a coger su color blanco, le añadimos las rodajitas de jengibre fresco, los dientes de ajo laminados y la cebolleta picada. \nLo dejamos hacer dos o tres minutos removiéndolo continuamente. Pasado ese tiempo, le añadimos la salsa que tenemos reservada y lo removemos bien con el fin de que nos quede todo bien mezclado, añadimos los cacahuetes, volvemos a remover y listo… Servir bien caliente.",
        "img" : "../../../../assets/imagenes/Comida-China/pollo gong bao.jpg",
        "pais" : "chinas"
      },
      {
        "nombre" : "Rollitos primavera",
        "ingredientes1" : "200 g. carne de ternera picada\n 2 zanahorias\n 1 cebolla\n 200 g. col china o repollo\n 100 g. brotes de soja\n ½ pimiento rojo\n 8 hojas de masa filo\n Salsa de soja",
       "ingredientes2" : "Aceite de sésamo\n Aceite de girasol para freír",
        "preparacion" :"Cortamos las verduras en juliana y reservamos. En un wok, o en una sartén si no tuvierais, añadimos 3 cucharadas de aceite para freír. Cuando esté bien caliente agregamos la col y la cebolla. \nRehogamos removiendo constantemente hasta que la verdura esté al dente. No debe quedar muy pochadita sino un poquito crujiente.\n Cuando esté casi lista añadimos al wok una cucharada de salsa de soja y unas gotitas de aceite de sésamo. Removemos unos segundos y retiramos.\n En el mismo wok volvemos a añadir un par de cucharadas de aceite para freír. Cuando esté caliente añadimos la zanahoria ya troceada y repetimos la operación. \nLa cocinamos removiendo constantemente hasta que esté al dente, añadimos una cucharada de soja y un chorrito de aceite de sésamo, removemos y retiramos.\n Seguimos el mismo proceso con el pimiento en juliana y reservamos. Volvemos a engrasar el wok y esta vez incorporamos la carne picada. \nPodríamos sustituir la carne de ternera por cerdo o pollo sin problema, incluso eliminarla totalmente y convertir los rollitos en sólo vegetales.\n Dejamos que se cocina la carne a fuego alto hasta que comience a dorarse. Agregamos los brotes de soja, dos cucharadas de salsa de soja y un chorrito de aceite de sésamo y seguimos cocinando durante 1 o 2 minutos. \nAñadimos al wok el resto de verduras que tenemos reservadas y dejamos 2 minutos que se mezclen los sabores. Retiramos del fuego y reservamos hasta que se temple.\n Estiramos una hoja de pasta filo en una superficie de trabajo y colocamos una porción del relleno intentando reducir al máximo la cantidad de salsa. \nSi la mezcla está muy húmeda podría romperse la fina hoja de pasta filo. Enrolamos haciendo un rollo utilizando toda la hoja y freímos en abundante aceite. Estará listo en apenas 1 o 2 minutos. \nRetiramos a una bandeja con papel absorbente y servimos caliente.",
        "img" : "../../../../assets/imagenes/Comida-China/rollitos primavera.jpg",
        "pais" : "chinas"
      },
      {
        "nombre" : "Shrimp chow",
        "ingredientes1" : "Aceite \n Fideos\n Verduras\n Camarones\n Salsa",
       "ingredientes2" : "",
        "preparacion" :"Cocine los camarones : Caliente el aceite a fuego alto y mezcle los camarones alrededor de la sartén hasta que estén cocidos. Transfiera a un plato aparte.\n Cocine las cebollas : En las cebollas restantes, dore las cebollas. Agregue las verduras restantes : Una vez que las cebollas se doren bien, agregue el apio y el repollo. Una vez que comiencen a dorarse y se pongan blandas, agregue el ajo y el jengibre. \nPrepare los fideos : Mientras se cocinan las verduras, rompa los fideos con agua corriente o en un recipiente con agua tibia. Cocine los fideos : Con las verduras transferidas a un plato aparte, agregue el aceite de sésamo a la caminata caliente junto con los fideos.\n Asegúrese de dejar que se cocinen, sin que los moleste, para que se doren bien en el fondo antes de tirar. Termina el Chow Mein de Camarones : Agrega los camarones cocidos y las verduras al wok con los fideos. \nAgregue la salsa de ostras y la salsa de soja y luego mezcle para combinar",
        "img" : "../../../../assets/imagenes/Comida-China/Shrimp chow.jpg",
        "pais" : "chinas"
      },
      {
        "nombre" : "Siew Yhok",
        "ingredientes1" : "1 kilo de lomo de cerdo\n 2 cucharadas de miel\n 4 cucharadas de salsa de soya\n 1 cucharada de vino blanco\n 6 cucharadas de azúcar\n Sal",
       "ingredientes2" : "",
        "preparacion" :"Lavamos bien la carne y la cortamos en 4 tiras a lo largo. Hacemos unos cortes, 4 más precisamente en diagonal, sin separar las tiras para que de esta forma el adobo humecte y penetre mucho más en la carne.\n Seguimos, y mezclamos todos los ingredientes menos la miel. Añadimos las tiras de la carne del cerdo y con el líquido las cubrimos muy bien mientras las pinchamos con la ayuda de un palillo o tenedor para que penetre mejor. \nDejamos esta mezcla a una temperatura ambiente por un espacio de 4-5 horas y en tanto va pasando el tiempo las vanos dando vuelta cada 30 minutos.\n Una vez que pasaron las 5 horas, llevamos la preparación a un horno precalentado previamente y a una temperatura de 190º C. Cuando la carne ya está bien caliente, se escurren las tiras de cerdo y se deja a un lado el adobo.\n En tanto, en la parte inferior del mismo ponemos una rustidera con unos 2 cm de agua y dejamos en el horno cocinando o calentando por aproximadamente una media hora.\n Pasado este tiempo la carne ya estará bien tostada con un color algo marrón o rojizo. Se quita la rejilla del horno, y se pasa la carne por el adobo volviéndola a poner una vez más en el horno pero del otro lado.\n Horneamos otra media hora para que quede parejo de ambos lados. Una vez listas las tiras, las pasamos a otra rejilla pero fría. De inmediato las untamos.\n No olviden que la carne debe estar muy pero muy caliente y con miel por todos lados aun en el interior de los cortes.\n En una cacerola pequeña hacemos hervir a fuego mediano el líquido de la maceración que habíamos dejado reservado para así lograr obtener una rica salsa. \nCuando ya está lista, se la coloca en una salsera caliente.  Por último, trinchamos la carne y las presentamos en forma de tiras cubiertas con la salsa. Además pueden adornar este maravilloso y asombroso plato con unas ricas verduras crudas.",
        "img" : "../../../../assets/imagenes/Comida-China/siew yhok.jpg",
        "pais" : "chinas"
      },
      {
        "nombre" : "Szechwan chiken",
        "ingredientes1" : "1/4 taza de aceite vegetal\n 1 libra de pechugas de pollo\n 1/4 taza de maicena\n 1/2 taza de cebolla amarilla\n1 pimiento rojo cortado\n 1 pimiento verde cortado\n 25 chiles rojos secos pequeños\n 1 1/2 cucharaditas de ajo picado",
       "ingredientes2" : "1 1/2 cucharadas de salsa hoisin\n 1 cucharada de aceite de sésamo\n 1 1/2 cucharadas de azúcar morena\n 1 cucharada de maicena\n 1/4 taza de caldo de pollo",
        "preparacion" :"Coloca el pollo en un bol con la maicena y sal y pimienta al gusto. Mezcle para combinar. Calentar el aceite vegetal en una sartén grande a fuego alto. Coloque el pollo en una sola capa en la sartén. Cocine durante 3-4 minutos por lado hasta que se doren. Es posible que deba realizar este paso por lotes. Retire el pollo de la sartén. Cubra para mantener el calor. Agregue la cebolla y los pimientos rojos y verdes a la sartén. Agregue los chiles y los granos de pimienta de Sichuan. Cocine durante 3-4 minutos o hasta que las verduras se ablanden.\n Agrega el ajo y el jengibre a la sartén; cocine por 30 segundos más. Regrese el pollo a la sartén con las verduras.Mientras se cocinan el pollo y las verduras, prepare la salsa. \nBatir todos los ingredientes de la salsa en un tazón pequeño. Agregue la salsa a la mezcla de pollo y deje hervir; cocine de 30 segundos a 1 minuto, o hasta que la salsa esté espesa. Servir inmediatamente.",
        "img" : "../../../../assets/imagenes/Comida-China/szechwan chiken.jpg",
        "pais" : "chinas"
      },
      {
        "nombre" : "Wanton mee",
        "ingredientes1" : "400 g de fideos wonton frescos \n ½ manojo de pak choy \n Aceite vegetal\n 300 g de cerdo char siu \n Pimienta blanca molida\n 6 pimientos verdes marinados en vinagre de arroz",
       "ingredientes2" : "40 envolturas cuadradas de wonton\n 150 g de carne de cerdo molida\n 150 g de camarones pelados y desvenados\n 1 cucharada de clara de huevo\n 1 cucharada de jengibre fresco rallado\n 2 cucharaditas de salsa de soja\n",
        "preparacion" :"En un tazón grande, mezcle la carne de cerdo molida, las gambas, la clara de huevo, el jengibre, la salsa de soja, la salsa de ostras, el caldo de pollo en polvo, el aceite de sésamo, la sal, el azúcar y la pimienta blanca.\n Amase durante 2 minutos. Coloque una cucharadita de la mezcla de carne de cerdo en el centro de cada envoltura de wonton. Humedezca los bordes de cada envoltura con agua fría. Selle los bordes dándoles forma de triángulo. Ciérrelos expulsando tanto aire como sea posible. Resérvelos sobre una hoja de papel pergamino, hasta que los vaya a cocinar.\n Aceite de ajo Caliente el aceite en una sartén y saltee el ajo a fuego medio-bajo hasta que comience a ponerse ligeramente dorado y crujiente. Transfiéralo inmediatamente a un recipiente y reserve. \n Salsa de setas chinas Remoje las setas chinas en agua tibia hasta que se ablanden. Escúrralas, pero reserve el agua de las setas. Exprima el exceso de agua de las setas y córtelas en pedazos. Caliente el aceite vegetal en una cacerola pequeña y saltee el ajo y las setas durante 1 minuto.\n Agregue el resto de los ingredientes a excepción de la mezcla de almidón de maíz. Ponga a hervir. Cubra y cocine lentamente, durante 20 minutos a fuego bajo. Agregue la mezcla de almidón de maíz y, mientras revuelve, deje que la salsa se espese ligeramente.\n Ajuste los condimentos si es necesario. Apague el fuego, cubra la sartén y reserve.",
        "img" : "../../../../assets/imagenes/Comida-China/wanton mee.jpg",
        "pais" : "chinas"
      },
      {
        "nombre" : "Wonton",
        "ingredientes1" : "300 g. harina de trigo\n 50 ml. de agua \n 2 huevos \n 1 cucharadita sal",
       "ingredientes2" : "",
        "preparacion" :"Ponemos la harina en un bol. En otro bol pequeño, mezclamos 2 huevos con agua y sal. Vamos añadiendo poco a poco. Amasamos unos 10 minutos, hasta conseguir una masa lisa.\n Es una masa muy compacta y un poco difícil de trabajar, así que paciencia. Tapamos con un film y dejamos reposar en la nevera durante 1 hora. A continuación amasamos otros 10 minutos y la dividimos en 2 partes.\n Extendemos la masa en forma rectangular hasta conseguir un grosor de unos 3 milímetros. Usamos maicena cuando sea necesario.\n Una vez terminadas las 2 piezas, las doblamos por la mitad, las tapamos con un trapo húmedo y las dejamos reposar durante 1 hora más.\n Extendemos nuestra masa hasta conseguir un grosor de 1 milímetro, una vez tenemos la masa bien extendida, la cortamos en cuadrados de 9 x 9 centímetros. Los cubrimos bien con maicena para que no se peguen y ya están listos para usar. \nSe pueden conservar 3 días en la nevera y hasta 1 mes en el congelador.",
        "img" : "../../../../assets/imagenes/Comida-China/wonton.jpg",
        "pais" : "chinas"
      },
      {
        "nombre" : "Zongzi",
        "ingredientes1" : "Arroz glutinoso redondo: 1.5 kg – 2 kg.\n Hojas de bambú disecado: 50 hojas.\n Hongos shitake mini disecado.\n Bondiola estofada: 1 kg.\n Salsa de soja: 50 ml.\n Aceite de girasol: 30 ml.\n Maní con piel: 300 g.\n Hilo de matambre.",
       "ingredientes2" : "",
        "preparacion" :"Para realizar este plato tardaremos 3 días. Durante 48-72 horas tendremos que dejar las hojas de bambú en remojo. El segundo día procederemos a cocinar la bondiola estofada, dejándola reposar en una heladera durante unas 24 horas.\n Es imprescindible que la carne esté completamente tierna. Debemos además lavar el arroz con mucha agua y ponerlo en remojo durante 24 horas también. \nAsí mismo, tanto los maníes como los hongos de shitake deberán estar en remojo el mismo tiempo. El tercer día procederemos a lavar bien las hojas de bambú y las escurriremos correctamente. \nTambién escurriremos los hongos y el resto de alimentos. Salteamos el arroz con un poco de aceite y salsa de soja y le añadimos un poquito de sal al gusto.\n Debemos cortar los hilos con una longitud de unos 60 cm- 100 cm. Usaremos 2 hojas de bambú para formar con ellas un cono, las rellenamos de arroz, carne, hongos y arroz y lo cerramos.\n Acto seguido intentamos armar un tamal con 4 ángulos y lo atamos con el hilo. Tras esto, debemos cocinarlos en agua o al vapor durante aproximadamente 1 hora o 1 hora y media.",
        "img" : "../../../../assets/imagenes/Comida-China/zongzi.jpg",
        "pais" : "chinas"
      },
      {
        "nombre" : "Jiaozi",
        "ingredientes1" : "1/3 col china\n 250 g carne de cerdo picada \n 1 cebolla china, la parte del tallo \n Un dado de jengibre rallado\n 2 cucharadas soja",
       "ingredientes2" : "1 cucharada sal\n 1/2 cucharada de sazonador de 5 especias \n Paquete de obleas para jiaozi o gyozas \n Un chorrito vino de cocinar",
        "preparacion" :"Pon abundante agua a hervir. Mientras, corta la col en trozos pequeños, añade un poco de sal. Cuando el agua empiece a hervir echa la col, no hace falta que esté mucho tiempo, cuando huela un poquito la sacas, luego se terminará de cocinar.\n Cuela la col, en la encimera pon papel de cocina y échala encima. Estruja para que salga el agua, después échala en un bol grande. En el bol introduce también la cebolla picada, el jengibre picado, \nla soja, el sazonador de 5 sabores, sal, vino y la carne. Mezclar bien, siempre en la misma dirección.",
        "img" : "../../../../assets/imagenes/Comida-China/jiaozi.jpg",
        "pais" : "chinas"
      },
      {
        "nombre" : "Ajiaco",
        "ingredientes1" : "8 tazas de agua\n 4 pechugas medianas de pollo\n 1 taza de guascas secas \n 2 lbs de papa criolla\n 2 lbs de papa sabanera \n 1 cebolla mediana picada\n",
        "ingredientes2" : "4 mazorcas grandes de maíz\n 1 cubo de caldo de gallina\n 1/2 taza de arvejas o chícharos verdes\n Sal al gusto",
        "preparacion" :"En una olla grande agrega el agua, el pollo y la mitad de las guascas. Déjalo cocinar por aproximadamente 40 minutos. Cuando ya el pollo este cocido lo sacas de la olla y lo colocas en un plato aparte; córtalo en trocitos y cúbrelo con papel aluminio para mantenerlo tibio. \n No tires el agua. Luego en la misma agua en que cocinaste el pollo debes agregar las dos clases de papa, la cebolla y el ajo. Deja cocinar por aproximadamente 2 horas para que la papa criolla se disuelva completamente.\n Agrega el pollo cortado en trocitos, las mazorcas, el caldo de gallina, las arvejas verdes (chícharos) y la sal a tu gusto. Mezcla con cuidado todos los ingredientes y déjalos cocinar por una hora más a fuego medio bajo. Agrega la mitad restante de las guascas y cocina por 5 minutos más.",
        "img" : "../../../../assets/imagenes/Comida-Colombiana/Ajiaco.jpg",
        "pais" : "colombianas"
      },
      {
        "nombre" : "Arepas",
        "ingredientes1" : "175 gr de harina de maíz precocida blanca \n 270 ml de agua\n 1/2 cucharada sopera de sal",
        "ingredientes2" : "",
        "preparacion" :"En un bol añade el agua y diluye la sal. Echa la harina de maíz precocida y mezcla muy bien hasta que se integren todos los ingredientes. Amasa durante unos minutos hasta obtener una mezcla compacta.\n Toma porciones de masa de unos 100 gr y haz primero una bola y luego aplástala ligeramente para que quede un panecillo de 1,5 cm de grosor, aproximadamente.\n Pon a calentar una sartén donde quepan bien las arepas o una plancha y engrásala con un poquito de aceite de oliva o de girasol. Cuando la sartén esté caliente, coloca las arepas y cocínalas, aproximadamente, durante 5 minutos por cada lado a fuego medio – alto. \n Deben dorarse por fuera y cocinarse por dentro, puedes comprobar cómo está abriéndola por la mitad para cerciorarte que la arepa está bien cocida. Y ya tienes unas deliciosas arepas caseras listas para rellenar con tus ingredientes favoritos.",
        "img" : "../../../../assets/imagenes/Comida-Colombiana/arepas.jpg",
        "pais" : "colombianas"
      },
      
      {
        "nombre" : "Arroz con Coco",
        "ingredientes1" : "1 lata de agua de coco \n 1/2 cucharadita de sal\n 1 taza de arroz de grano mediano\n 2/3 taza de leche evaporada \n Ralladura de limón verde",
        "ingredientes2" : "",
        "preparacion" :"Haz hervir el agua de coco en una cacerola mediana a fuego medio. Agrega la sal y el arroz. Reduce el fuego a medio-bajo; pon la tapa. \n Cocina esto, revolviéndolo de vez en cuando, de 12 a 15 minutos hasta que el agua esté a punto de ser absorbida por completo. Agrega la leche evaporada. Pon la tapa y cocina el conjunto, revolviéndolo de vez en cuando, de 10 a 15 minutos más o hasta que el arroz esté tierno. \n Puedes agregar más agua en caso de que sea necesaria para conseguir que el arroz tenga la textura necesaria. Retira la cacerola del fuego. Incorpora, al gusto, la ralladura de limón verde, de así desearlo.",
        "img" : "../../../../assets/imagenes/Comida-Colombiana/arroz con coco.jpg",
        "pais" : "colombianas"
      },
      
      {
        "nombre" : "Bollo Limpio",
        "ingredientes1" : "1 ½ kg de maíz pilado\nSal Hojas de mazorca grandes\n Cabuya",
        "ingredientes2" : "",
        "preparacion" :"Poner a remojar el maíz desde víspera y limpiarlo de impurezas. Botar el agua y cocinar el maíz en agua fresca durante 30 minutos, dejar enfriar.\n Escurrir el agua, moler el maíz y amasarlo con un poco de sal hasta obtener una pasta suave. Lavar las hojas de mazorca y poner 3 cucharadas de masa en cada una, cubrirla con otra hoja y envolver bien, doblar los extremos y amarrar.\n Cocinar en agua hirviendo con un poquito de sal durante 30 minutos.",
        "img" : "../../../../assets/imagenes/Comida-Colombiana/bollo limpio.jpg",
        "pais" : "colombianas"
      },
      
      {
        "nombre" : "Carimañola",
        "ingredientes1" : "1 kilo yuca\n al gusto sal\n 500 gr carne molida\n 2 cebollas grandes picada\n 1 zanahoria rallada\n 4 dientes ajo\n orégano seco",
        "ingredientes2" : "pimienta picante molida de la negra\n 2 cdas vinagre\n 4 cdas salsa soya\n 1 cubo caldo de res",
        "preparacion" :"Poner a sancochar la yuca en abunda te agua con bastante sal, esperar hasta que esté semi blanda. sacar y dejar enfriar. Luego pasarla por un molino. Amasarla Para la carne sofreír la cebolla picada con la zanahoria rallada el ajo, el orégano.\n Luego agregar la carne molida, el vinagre, la salsa soya, el cubo de caldo de res la pimienta, la sal y tapar, dejar cocinar a juego lento Destapar revisar la sazón y esperar a a que seque con esto rellenaremos las empanadas de yuca.\n Armar las empanadas. Sofreír en abundante aceite. Y listo.",
        "img" : "../../../../assets/imagenes/Comida-Colombiana/carimañola.jpg",
        "pais" : "colombianas"
      },
      
      {
        "nombre" : "Changua",
        "ingredientes1" : "1 taza de agua\n 3 cebollas verdes, picadas\n 2 tazas de leche\n Sal, al gusto\n 2 huevos\n 2 tajadas de pan blanco\n 2 cucharadas de cilantro fresco, picado",
        "ingredientes2" : "",
        "preparacion" :"Pon a calentar el agua en una olla o cazuela de barro a fuego medio. Agrégale la cebolla verde y déjala cocinar durante 2 minutos. Agrega la leche y la sal. Reduce la temperatura y agrega los huevos.\n Cocina por 2 minutos o hasta que los huevos estén cocinados. Agrega los trozos de pan sobre la changua y decora con el cilantro picado.",
        "img" : "../../../../assets/imagenes/Comida-Colombiana/changua.jpg",
        "pais" : "colombianas"
      },
      
      {
        "nombre" : "Cuchuco",
        "ingredientes1" : "Una taza de cuchuco de trigo\n 14 tazas de agua\n Una taza de arveja verde\n 3 dientes de ajo machacados\n Una ramita de cilantro\n 3 tallos de cebolla larga\n 8 papas criollas pequeñas sin pelar",
        "ingredientes2" : "Una taza de fríjoles\n Una taza de zanahoria picada en cuadritos\n 4 papas sabaneras peladas y finamente picadas\n 5 hojas de repollo troceadas\n Una taza de habas\n Sal\n Pimienta",
        "preparacion" :"En una olla grande, cocine el espinazo en el agua junto con la cebolla larga, el cilantro y los ajos. Deje hervir a fuego lento durante 45 minutos o hasta que el espinazo esté tierno. \n Agregue el cuchuco y deje hervir durante 10 o 15 minutos más. Luego, incorpore la papa sabanera, la zanahoria, las arvejas, las habas, los fríjoles y deje cocinar hasta que el cuchuco comience a espesar.\n Posteriormente, adicione la papa criolla, el repollo y la sal. Cocine a fuego lento durante 20 minutos más revolviendo reiteradamente. En un plato hondo, sirva primero el espinazo y luego vierta la sopa.\n Decore con cilantro finamente picado.",
        "img" : "../../../../assets/imagenes/Comida-Colombiana/cuchuco.jpg",
        "pais" : "colombianas"
      },
      
      {
        "nombre" : "Fritanga",
        "ingredientes1" : "5 vainas medianas de ají colorado \n 3 cucharas de ají colorado molido\n 2 cucharillas de pimienta entera\n 2 cucharillas de comino entero\n 4 dientes de ajo\n 3 Kg. carne de cerdo",
        "ingredientes2" : "8 papas blancas peladas 1½ Lb pataska cocida 1 Lb maíz pelado no cocido sal aceite",
        "preparacion" :"Una noche antes remojar el maíz PELADO seco en bastante agua, al día siguiente darle una lavada y ponerle a cocer con sal muy poco  hasta que el maíz se revienten.\n En un batán de piedra moler la pimienta, el comino y los ajos y separarlo. para darle un poco de sabor K’aspalo los AJIS,  pasando por el fuego de la cocina y también mole bien fino.\n Cortar el cerdo (chancho) en trozos pequeños y lávalos, y  hacerles cocer por lo menos unas 2 horas con bastante agua y sal a gusto y agrégalo los condimentos que moliste en el batan y sal a gusto.\n Saca el cerdo y en un sartén con aceite, freír de ambos lados todos los pedazos . Mientra tanto en otra olla  con 3 cucharadas de aceite,  hacer cocer el ají colorado durante diez minutos removiendo constantemente para que no se pegue, \nen unos 10 minutos ya cocerá el ají y  hecha  un cucharón de caldo del chancho. A esta preparación de la nueva olla añadir los trozos de cerdo y dejar cocer a fuego lento durante 30 minutos, para que el sabor del aji entre a la carne.\n No dejes que se seque, sigue echando el caldo con los ingredientes. Servir en un plato el mote  y luego colocar pedazos de cerdo  y rociarlo con el ají colorado, acompañando con pataska o chuño  o al final o dos papas.",
        "img" : "../../../../assets/imagenes/Comida-Colombiana/fritanga.jpg",
        "pais" : "colombianas"
      },
      
      {
        "nombre" : "Obleas",
        "ingredientes1" : "½ litro de agua \n 1 cucharada de azúcar\n 1 cucharada de aceite\n 1 cucharadita de bicarbonato de sodio\n ½ cucharada de maicena\n 250 g de harina de trigo",
        "ingredientes2" : "",
        "preparacion" :"Colocar en un recipiente profundo el agua e ir añadiendo el azúcar, el aceite, el bicarbonato y la maicena. Mezclar bien con una varillas, hasta que el azúcar se disuelva Añadir la harina de trigo poco a poco e ir batiendo suavemente para que no se formen grumos; debe quedar una mezcla suave, pero no muy líquida. Encender la máquina de hacer obleas y aceitarla para que no se pegue la mezcla, dejarla encendida unos 5 minutos para que se caliente bien. Colocar en la plancha una cucharada de la mezcla y bajar la tapa para que se distribuya en toda la superficie.\n Dejar que se cocine por 50 segundos a 1 minuto; levantar la tapa y despegar; repetir la operación hasta que se acabe la mezcla.",
        "img" : "../../../../assets/imagenes/Comida-Colombiana/obleas.jpg",
        "pais" : "colombianas"
      },
      
      {
        "nombre" : "Pan de bono",
        "ingredientes1" : "2 tazas de almidón o harina de yuca\n 2 cucharadas de harina de maíz\n Sal (una cucharadita)\n Polvo para hornear (una cucharadita)\n 2 cucharadas de azúcar\n 200 gr de queso rallado",
        "ingredientes2" : "½ taza (50 gr) de queso feta rallado\n 3 cucharadas de mantequilla\n 1 huevo",
        "preparacion" :"Precalienta el horno (425ºF - 220ºC). Agrega (procesador de alimentos) el almidón de yuca, la harina de maíz, polvo para hornear, azúcar, y sal. Procede a mezclar la mantequilla, el huevo, el queso fresco, y el queso feta.\n Luego agrega la leche (no toda de inmediato, poco a poco) hasta que la masa quede suave. Ahora vas a hacer con la masa círculos, del tamaño que quieras y las vas a ubicar en un molde sobre papel mantequilla .\n Lleva los pandebonos al horno y déjalos cocinar durante 25 minutos. Revisa continuamente para que no se vayan a quemar. La clave es que tengan un color dorado intenso.",
        "img" : "../../../../assets/imagenes/Comida-Colombiana/Pan de bono.jpg",
        "pais" : "colombianas"
      },
      
      {
        "nombre" : "Pan de yuca",
        "ingredientes1" : "50 ml de leche\n 50 ml de aceite de maíz\n 25 ml de agua\n 2 huevos\n 100 gramos de almidón de yuca\n 100 gramos de queso semiduro",
        "ingredientes2" : "",
        "preparacion" :"Para empezar a preparar tus ricos pancitos de yuca y queso, calienta en una olla el agua con el aceite y la leche hasta que empiece a hacer burbujas. Vuelca de una vez los líquidos calientes del punto anterior sobre la fécula o almidón.\n Con ayuda de una cuchara de madera, integra bien los ingredientes. Es una masa algo dura, por lo que no te asombres si debes ejercer mucha fuerza para lograrlo. Si prefieres, puedes amasarla con las manos o guantes, con cuidado de no quemarte y teniendo en cuenta que es algo pegajosa.\n Una vez que hayas integrado bien los ingredientes del pan y haya bajado la temperatura, agrega los huevos. Vuelve a integrar. Por último, integra el queso rallado o cortado en cubos pequeños.\n Arma los pancitos con ayuda de tus manos mojadas con aceite. Esto ayudará a que no se te pegue la preparación en las manos. Dispón los pancitos de yuca en una asadera para horno con aceite en aerosol.\n Colócalos separados por unos 3 dedos entre sí para que al estirarse durante el horneado no se peguen y el calor se distribuya correctamente.\n Cocínalos en el horno fuerte (200 °C) por 15 minutos hasta que estén algo dorados. Cuando estén dorados, sácalos del horno y disfruta de tu pan de yuca.",
        "img" : "../../../../assets/imagenes/Comida-Colombiana/pan de yuca.jpg",
        "pais" : "colombianas"
      },
      
      {
        "nombre" : "Rondon",
        "ingredientes1" : "1 kg de pescado\n 300 gr de yuca\n 200 gr de ñame\n 2 plátanos verdes\n 2 cebollas\n 2 chiles dulces\n 1 chile habanero 1 cabeza de ajo",
        "ingredientes2" : "1 raíz de jenjibre\n Hojas de laurel\n 1 chile picante entero\n 1 cucharadita de curry\n Sal y pimienta al gusto",
        "preparacion" :"Pele y corte en trozos el ñame, la yuca y los plátanos verdes. Reserve. En una olla, ponga a cocinar el pescado en agua con cebolla, chile dulce y el ajo. \nAgregue sal, jengibre y laurel. Luego de hervir por unos minutos, retire el pescado y cuele el caldo. En una olla ponga a hervir la leche de coco con el caldo de pescado y agregue la yuca, el ñame y el plátano.\n Deje ablandar un poco y luego incorpore el pescado y el chile habanero. Rectifique el sabor y cocine unos 10 minutos. Sirva y disfrute.",
        "img" : "../../../../assets/imagenes/Comida-Colombiana/rondon.jpg",
        "pais" : "colombianas"
      },
      
      {
        "nombre" : "Sancocho",
        "ingredientes1" : "1 libra de carne de res\n 8 tazas de agua\n 1 cebolla grande picada \n 2 dientes de ajo triturados\n 1 pimiento verde picado \n 4 ajíes dulces picados \n 2 tomates picados\n 2 hojas de cilantro",
        "ingredientes2" : "½ libra de papas \n ½ libra de batata blanca\n 1 plátano verde picado\n 1 plátano maduro picado  \n ½ libra de guineos verdes picados\n 2 mazorcas de maíz picadas",
        "preparacion" :"Combina todos los ingredientes para el caldo en una olla. Tapa y cocina a fuego alto hasta que hierva. Luego baja a fuego mediano-bajo y cocina hasta que la carne esté tierna, más o menos unos 45 minutos.\n Añade todos los vegetales cortados en la olla con la carne, teniendo cuidado de no quemarte. Cocina a fuego mediano-alto hasta que los vegetales estén cocidos. Prueba el sancocho y ajusta la sal, si gustas. \nEl sancocho estará listo cuando todos los vegetales estén tiernos y el caldo espese un poco. Sirve con una lasca de aguacate. Lo puedes acompañar con arroz o pan.",
        "img" : "../../../../assets/imagenes/Comida-Colombiana/sancocho.jpg",
        "pais" : "colombianas"
      },
      
      {
        "nombre" : "Sudado de pollo",
        "ingredientes1" : "8 muslos de pollo sin la piel\n 1 cucharada de aceite vegetal\n ½ taza de cebolla picada\n ½ de taza de pimientón rojo picado\n 1 diente de ajo picado\n 2 tazas de tomate picado\n 1 cucharada de Sazuón con azafran",
        "ingredientes2" : "½ de cucharadita de sal\n ½ cucharadita de pimienta\n 8 papas pequeuñas amarillas peladas \n 3 tazas de caldo de pollo",
        "preparacion" :"En una olla grande, caliente el aceite vegetal a fuego medio. Añadir la cebolla y el pimiento rojo y saltee hasta que las cebollas estén transparentes, unos 3 minutos. A continuaciuón, auñadir los tomates, el ajo, la sal y la pimienta molida y sofría por 5 minutos muás. Agregue el pollo, el caldo de pollo, la sazuón y comino en polvo.\n Tapar y cocinar durante 25 minutos, revolviendo ocasionalmente. Añadir las papas y el cilantro y cocine por 30 minutos muás o hasta que las papas estén tiernas. Sirva sobre arroz blanco.",
        "img" : "../../../../assets/imagenes/Comida-Colombiana/sudado de pollo.jpg",
        "pais" : "colombianas"
      },
      
      {
        "nombre" : "Papas rellenas",
        "ingredientes1" : "Aceite vegetal para freír\n 5 papas medianas\n ½ de cucharadita de sal\n Relleno de Carne\n 1 cucharada de aceite de oliva\n 1 taza de tomate picado\n ⅓ taza de cebolla picada",
        "ingredientes2" : "1 diente de ajo picado\n ½ cucharadita de comino molido\n ½ cucharadita de Sazón con azafran\n ¼ de cucharadita de sal\n ¼ cucharadita de pimienta molida\n ½ libra de carne molida",
        "preparacion" :"Pelar las papas y cortarlas en trozos, pongalas en una olla mediana y cubrir con agua y agregar un ½ de cucharadita de sal. Lleve las papas a hervir a fuego medio-alto, y luego baje el fuego a medio y cocine hasta que las papas esten blandas unos 20 minutos.\n Escurrir las papa y machcarla como para purué con un tenedor o machacador y reservar. Preparar el relleno, en una sartén grande, caliente 1 cucharada de aceite de oliva a fuego medio y agregue la cebolla, el tomate, la cebolla large, el ajo, el comino, el azafran, la pimienta y la sal. \nCocine por 5 minutos o hasta que la cebolla esté transparente, añadir la carne y cocine revolviendo ocasionalmente unos 10 -15 minutos. \nDeje enfriar. Para hacer la colada: En un tazón mezcle todos los ingredientes y batir hasta que la mezcla quede suave y reservar.",
        "img" : "../../../../assets/imagenes/Comida-Colombiana/papas rellenas.jpg",
        "pais" : "colombianas"
      },
      
      {
        "nombre" : "Mote de queso",
        "ingredientes1" : "1 kilogramo de Ñame\n 750 gramos de Queso salado duro\n 80 mililitros de Suero\n 2 ramas de Cebolla larga\n 1 unidad de Cebolla cabezona",
        "ingredientes2" : "5 dientes de Ajo\n 1 unidad de Limón\n 60 mililitros de Aceite\n 1 pizca de Sal\n 1 pizca de Pimienta",
        "preparacion" :"En una olla con abundante agua, cocinar el ñame pelado y cortado en trozos con una rama de cebolla larga, durante 45 minutos.\n Aparte, en una sartén con aceite sofreír las cebollas cortadas finamente y el ajo macerado, hasta que esté blando, salpimentar. Agregar el sofrito a la sopa dejar cocinar durante 30 minutos más. \nDespués añadir el queso cortado en cubos, cocinar hasta que esté un poco blando y finalmente rectificar sabor con unas gotas de limón, el suero costeño y si es necesario una pizca de sal.\n Sirve el mote de queso y disfruta de esta receta colombianas acompañando con un poco de arroz blanco. Si te ha gustado esta receta, tienes algún comentario o inquietud, danos tu opinión.",
        "img" : "../../../../assets/imagenes/Comida-Colombiana/mote de queso.jpg",
        "pais" : "colombianas"
      },
      {
        "nombre" : "Bacalao a la vizcaina",
        "ingredientes1" : "1 kg Bacalao\n 2 lt Agua tibia\n 1/2 Cebolla, finamente picada\n 6 Dientes de ajo, finamente picados\n 6 jitomates, sin semillas y en cubos chicos\n 2 tazas Puré de tomate\n 3/4 taza Aceite de Oliva \n 3 tazas Papas, en cubos y cocidas\n",
        "ingredientes2" : "150 g Almendra, peladas y picadas\n 200 g Aceitunas verdes, sin hueso y picadas\n 1/2 taza Perejil picado\n 1 taza Chile güero en lata\n Sal y pimienta al gusto\n",
        "preparacion" :"Coloca el bacalao en un refractario y cubre con agua tibia.\n Deja reposar por 2 noches antes de la preparación. Cambia el agua cada 6 horas.\n Escurre y desmenuza, retira las espinas. Reserva.. Calienta el aceite y acitrona la cebolla y el ajo. Agrega el jitomate y mezcla.\n Cocina por 10 minutos o hasta que suelte sus jugos. Añade las papas y mezcla. Vierte el puré de tomate y mezcla.\n Cocina por 10 minutos. Agrega el bacalao, las aceitunas y las almendras. \nTapa y cocina por 25 minutos. Mueve ocasionalmente. Agrega el perejil y mezcla.\n Sazona y mezcla. Cocina por 10 minutos más y sirve. Acompaña con los chiles güeros y pan.",
        "img" : "../../../../assets/imagenes/Comida-Espanola/bacalao a la vizcaina.jpg",
        "pais" : "españolas"
      },
      {
        "nombre" : "Boquerones Fritos",
        "ingredientes1" : "600 g de boquerones frescos limpios\n Harina\n Aceite de oliva virgen extra\n 1 limón\n Sal",
        "ingredientes2" : "",
        "preparacion" :"Dispón un plato con harina y reboza los boquerones por ambos lados.\n Pon una sartén al fuego con abundante aceite de oliva para freír los boquerones.\n Antes de añadirlos a la sartén, sacúdelos un poco para que suelten el exceso de harina y el rebozado quede más fino.\n Fríe los boquerones en tandas durante 3-4 minutos. Al retirarlos, déjalos sobre papel absorbente para eliminar el exceso de aceite.\n Sírvelos con unas rodajas de limón para decorar y también para poder añadirles unas gotitas de zumo al degustarlos.",
        "img" : "../../../../assets/imagenes/Comida-Espanola/boquerones fritos.jpg",
        "pais" : "españolas"
      },
      {
        "nombre" : "Chipirones",
        "ingredientes1" : "1 kg de chipirones \n 2 cebollas grandes\n 2 dientes de ajo\n 1 vasito de coñac\n sal\n perejil picado",
        "ingredientes2" : "",
        "preparacion" :"Tiramos de los tentáculos con cuidado, introduciendo un dedo dentro del chipirón, para poder retirar también con un solo movimiento todos los interiores.\n Abrimos los tentáculos y tiramos de la boca para retirarla. Luego haciendo presión con dos dedos en la zona en donde se unen los interiores a los tentáculos, con la otra mano tiramos de los tentáculos para separarlos.\n También cortamos las aletas y las picamos. Retiramos la pluma, que es la piel transparente que queda en el interior del chipirón.\n Damos vuelta el chipirón, como si fuera un calcetín, para limpiarlo por dentro de cualquier resto de arena. \nSi son pequeños podemos solo meter un dedo dentro para limpiarlos, sin darlos vuelta. Secamos con papel absorbente para eliminar el exceso de agua.",
        "img" : "../../../../assets/imagenes/Comida-Espanola/chipirones.jpg",
        "pais" : "españolas"
      },
      {
        "nombre" : "Chorizo a la Sidra",
        "ingredientes1" : "Chorizo fresco\n 1 kg\n Sidra de manzana natural\n 250 ml\n Patata cocida para acompañar (opcional)",
        "ingredientes2" : "",
        "preparacion" :"Sacamos la cuerda a los chorizos y los colocamos en una cazuela con fondo. Los pinchamos con la punta de un cuchillo para que no revienten y suelten parte del jugo durante la cocción. Echamos por encima la sidra y ponemos a fuego alto. Cuando empiece a hervir dejamos a fuego vivo durante cinco minutos, lo bajamos y terminamos la cocción. \n El tiempo dependerá de la frescura, tamaño y calidad del chorizo, pero en unos 15 ó 20 minutos estarán, \ncuando el alcohol se haya evaporado y reducido el líquido, quedando una salsita en el fondo de la cazuela. \n Servimos inmediatamente.",
        "img" : "../../../../assets/imagenes/Comida-Espanola/chorizo a la sidra.jpg",
        "pais" : "españolas"
      },
      {
        "nombre" : "Cocido Madrileño",
        "ingredientes1" : "1 taza de gallina\n 1 taza de tocino\n 1 taza de jamón serrano, en punta\n 2 tazas de tuétano\n 1 1/2 tazas de garbanzo, remojados y limpios\n 2 zanahorias\n 1 nabo\n 4 papas",
       "ingredientes2" : "Sal al gusto\n 1/2 tazas de fideo, cabellín\n 1 taza de col\n 1/2 tazas de chorizo\n 1/2 tazas de morcilla de arroz",
        "preparacion" :"En una olla con agua cocina las carnes, la punta de jamón y los huesos; cuando empiece a hervir agrega los garbanzos;\n al segundo hervor, agrega la zanahoria, el nabo y cocina por 1 hora. Añade la papa y cocina por aproximadamente 1 horas más o hasta que todos los ingredientes estén suaves. \nSazona con sal. Cuela y con el mismo, caldo cocina los fideos. Reserva. En una ollita hierve la col. Escurre y reserva.\n En una sartén cocina el chorizo y la morcilla. Sirve el caldo con los fideos, los garbanzos, la verdura y las carnes.",
        "img" : "../../../../assets/imagenes/Comida-Espanola/cocido madrileño.jpg",
        "pais" : "españolas"
      },
      {
        "nombre" : "Croquetas",
        "ingredientes1" : "2 cucharadas de leche de vaca \nsal\n 1/2 cucharaditas de pimienta\n 1/2 cucharaditas de cebollita verde, picada \n2 yemas de huevo, batidas\n 3 cucharadas de harina",
       "ingredientes2" : "4 tazas de puré de papa\n1 huevo, batido\n pan molido \naceite, para freír",
        "preparacion" :"En un bowl ponga el puré de papa, la leche, sal, pimienta, cebollita verde picada, yemas de huevo batidas y harina. \nMezcle bien todo y refrigere. Con una cuchara para hacer bolas de helado, forme bolas de la masa de papa y pase por el huevo batido y luego por el pan molido.\n Fría cada croqueta en un sartén lleno con aceite bien caliente hasta que se dore por todos los lados",
        "img" : "../../../../assets/imagenes/Comida-Espanola/croquetas.jpg",
        "pais" : "españolas"
      },
      {
        "nombre" : "Escalivada",
        "ingredientes1" : "4 berenjenas grandes\n 8 pimientos rojos\n 2 dientes de ajo picados\n 1 dl de aceite de oliva\n Sal.",
       "ingredientes2" : "",
        "preparacion" :"Asar las berenjenas y los pimientos a la brasa o al horno. Pelar y quitar la parte del tallo de las berenjenas. \n Pelar y retirar las semillas a los pimientos. Cortar las verduras en tiras.\n Espolvorear con ajo picado fino y aderezar con aceite y sal antes de servir.",
        "img" : "../../../../assets/imagenes/Comida-Espanola/escalivada.jpg",
        "pais" : "españolas"
      },
      {
        "nombre" : "Fideua",
        "ingredientes1" : "500 gramos de fideos\n Medio pimiento rojo\n Medio pimiento verde\n 2 calamares\n 200 gramos de gambas\n Caldo de pescado casero\n Azafrán o colorante",
       "ingredientes2" : "",
        "preparacion" :"Comenzamos la receta de fideuá dorando los fideos en la paella. Los ponemos a fuego medio y vamos dándoles vueltas poco a poco hasta que se vayan dorando. \nUna vez dorados a nuestro gusto los retiramos y reservamos. En esa paella, rehogamos a fuego medio los pimientos, haciendo un buen sofrito.\n Ponemos un poco de sal. Luego rectificamos pero con el caldo seguramente que se quede perfecto. Una vez rehogado agregamos los calamares limpios y cortados en trocitos.\n Dejamos que se hagan unos minutos. Incorporamos los fideos, las gambas peladas y cubrimos con caldo de pescado casero (agregamos el azafrán o el colorante). \n La cantidad será más o menos la misma en mi caso (500 ml), pero dependerá de los fideos que uséis porque necesitará más o menos.\n Si necesita más caldo se lo podemos añadir cociendo, es más sencillo que el arroz. Cuando esté listo lo dejamos reposar unos 5 minutos a disfrutar.",
        "img" : "../../../../assets/imagenes/Comida-Espanola/fideua.jpg",
        "pais" : "españolas"
      },
      
      {
        "nombre" : "Gambasal ajillo",
        "ingredientes1" : "600 gr de gambas\n 4 dientes de ajo\n 1/2 guindilla\n aceite\n sal\n perejil picado",
       "ingredientes2" : "",
        "preparacion" :"Pela las gambas en crudo. Calienta el aceite y fríe los ajos en láminas y la guindilla cortada en aros. Después agrega las gambas, sazona y deja que se hagan unos minutos dándoles vueltas en la sartén.\n Espolvorea con perejil y sirve.",
        "img" : "../../../../assets/imagenes/Comida-Espanola/gambas al ajillo.jpg",
        "pais" : "españolas"
      },
      {
        "nombre" : "Paella",
        "ingredientes1" : "6 salchichas rebanadas 200 g de chorizo cortado en rebanadas 200 g de carne de cerdo cortada en cubos 1 pechuga de pollo sin hueso y cortada en cubos\n 3 pescados sierra cortados en rebanadas\n 20 camarones lavados\n 100 g de almejas lavadas\n 100 g de ejotes\n 1 pimiento rebanado en juliana\n ½ cucharadita de cebolla en polvo\n",
       "ingredientes2" : "1 cucharadita de azafrán en polvo\n 2 cucharadas de consomé en polvo\n Aceite de oliva suficiente\n 2 ½ tazas de arroz\n 6 tazas de agua",
        "preparacion" :"Si no tienes una paellera, usa una cacerola donde quepan todos los ingredientes y pon a calentar el aceite. A fuego lento, fríe las salchichas y después agrega el pollo, la carne de cerdo, el chorizo, los ejotes y el pimiento, \n integra perfectamente y después agrega los condimentos (el ajo en polvo, la cebolla en polvo, el consomé, sal y pimienta). Mueve hasta que la carne tome un color dorado.\n Agrega las tazas de arroz y las de agua y cocina por dos o tres minutos más. Ahora integra el pescado, los camarones, las almejas y el azafrán.\n Tapa con papel aluminio y deja cocinando a fuego bajo hasta que el agua se evapore y el arroz quede en su punto adecuado de cocción. ¡A disfrutar!",
        "img" : "../../../../assets/imagenes/Comida-Espanola/paella.jpg",
        "pais" : "españolas"
      },
      {
        "nombre" : "Pimientos Rellenos",
        "ingredientes1" : "4 Piezas Pimiento morrón limpios\n 2 Cucharadas Aceite de maíz\n 2 Tazas Champiñones rebanados\n 100 Gramos Queso tipo manchego rallado\n 4 Cucharadas Sazonador Líquido MAGGI®",
       "ingredientes2" : "",
        "preparacion" :"Lleva los pimientos al horno de microondas por 7 minutos. Luego, mételos en una bolsa de plástico hasta que suden lo suficiente y de esta manera los puedas pelar más fácilmente. Corta la parte superior de cada pimiento.\n Aparte, en una sartén con aceite caliente sofríe los champiñones hasta que doren junto con el Líquido Sazonador MAGGI® . Retira del fuego y mezcla con el queso tipo manchego.\n Rellena los pimientos con esta preparación. Acomódalos en un recipiente y lleva por 30 segundos al horno de microondas.",
        "img" : "../../../../assets/imagenes/Comida-Espanola/pimientos rellenos.jpg",
        "pais" : "españolas"
      },
      {
        "nombre" : "Pisto",
        "ingredientes1" : "400 g. de tomates maduros\n 1 cebolla grande\n 1 pimiento rojo\n 1 pimiento verde\n 1 calabacín\n 1 diente de ajo\n 50 ml. de vino blanco",
       "ingredientes2" : "",
        "preparacion" :"Lavamos las verduras. Las picamos en “brunoise” (dados pequeños), de similar tamaño. El diente de ajo, bien picadito. En una cazuela o en una sartén alta, echamos una lámina de aceite de oliva virgen extra y calentamos.\n Cuando coja temperatura, añadimos la cebolla y sofreímos. A continuación el ajo y los pimientos. Mezclamos bien. Salamos al gusto, y añadimos un buen chorro de vino blanco. \nEn este punto, tapamos la cazuela, bajamos a fuego lento y cocinamos 30 minutos. El siguiente paso es incorporar el calabacín. Mezclamos de nuevo, tapamos y seguimos cocinando otros 20 minutos. \nA fuego bajo, pero que se aprecie un “chup chup” continuo. Los tomates cortados en dados, los trituramos con la batidora, y los añadimos al resto de verduras.\n Mezclamos, rectificamos de sal si es necesario y dejamos cocinar 20 minutos más (con la cazuela tapada). Pasado el tiempo, tendremos listo un delicioso pisto de verduras.",
        "img" : "../../../../assets/imagenes/Comida-Espanola/pisto.jpg",
        "pais" : "españolas"
      },
      {
        "nombre" : "Pulpo a la Gallega",
        "ingredientes1" : "Suficiente de agua\n 1 cucharada de sal de mar, para cocer el pulpo\n 800 gramos de pulpo, entero, limpio\n 3 papas, con cáscara\n 2 cucharadas de paprika\n 2 cucharadas de aceite de oliva\n 1 pizca de sal\n",
       "ingredientes2" : "",
        "preparacion" :"Hierve agua en una cacerola y agrega sal. Cuando el agua esté hirviendo con una burbuja alta, toma el pulpo de la cabeza, de manera que cuelguen los tentáculos.\n Metemos el pulpo en agua hirviendo sin soltarlo y lo sacamos 3 veces seguidas, a la tercera lo metemos por completo en el agua hasta que lo cubra. \n Al hacer esto, el pulpo quedará terso y evitaremos que se despelleje al cocerlo. Cocina por 18 minutos. Pasado el tiempo, agrega las papas y cocina por 20 minutos más. Para comprobar que el pulpo está cocido, \npuedes atravesar un palillo de madera en el centro del pulpo, si no opone resistencia es que está listo. Sobre una tabla corta el pulpo en trozos medianos y las papas en rodajas.\n En un plato redondo de madera sirve una cama de papas, coloca encima el pulpo, espolvorea con la paprika, el aceite de oliva y la sal gruesa.\n",
        "img" : "../../../../assets/imagenes/Comida-Espanola/pulpo a la gallega.jpg",
        "pais" : "españolas"
      },
      {
        "nombre" : "Tortilla de papas",
        "ingredientes1" : "5 papas, grandes peladas y en rebanadas muy delgadas\n 1 cebolla, grande, rebanada en gajos delgaditos\n 1/2 tazas de aceite de oliva\n 9 huevos\n al gusto de pimienta, al gusto",
       "ingredientes2" : "",
        "preparacion" :"Ponga a calentar el aceite de oliva en un sarten grande (del tamaño de la tortilla de patatas). Agregue las papas y la cebolla en rebanadas muy delgadas.\n Cocine a fuego medio moviendo ocasionalmente hasta que la papa se empiece a deshacer y este cocida, unos 20 minutos.\n Ponga sal y pimienta al gusto. En un plato hondo, mezcle los huevos con un tenedor hasta que se esponjen un poco.\n Deje cocer con las papas hasta que se vea la orilla dorada y que el centro ya casi no se mueva. Voltee la tortilla en un sartén del mismo tamaño (ya engrasada con aceite de oliva y caliente).\n Una vez que se termine de cocer, apague el fuego y deje enfriar ligeramente. Desmolde sobre un platón y sirvala a temperatura ambiente.",
        "img" : "../../../../assets/imagenes/Comida-Espanola/tortilla de papas.jpg",
        "pais" : "españolas"
      },
      {
        "nombre" : "Frito Mallorquin",
        "ingredientes1" : "0,5 kg. de patatas cortadas a dados\n 1 cabeza de ajos pelados y chafados\n 1 cebolla grande picada\n 2 pimientos rojos cortados a dados\n 3 hojas de laurel\n 14 cucharadas soperas de aceite de oliva\n 50 gramos de guisantes",
       "ingredientes2" : "200 gramos de habas tiernas troceadas\n 700 gramos de asaduras de cordero cortadas a dados\n 1/2 manojo de cebolletas\n Una ramita de hinojo fresco\n Sal, pimienta molida y pimentón al gusto",
        "preparacion" :"Pon una sartén al fuego y añade aproximadamente la mitad del aceite. Después se deben sofreír los ajos y las cebolletas a fuego lento. Añadir las asaduras limpias, subiendo la fuerza al fuego.\n Dejar cocinar unos 10 minutos removiendo de vez en cuando. Apartar del fuego y reservar en otro recipiente diferente. En la misma sartén utilizada al inicio añadir el resto de aceite, la cebolla y el laurel y cocinar hasta que estén bien hecha.\n Añadir un poquito de sal y reservar junto al cordero. Después, se deberán sofreír con un poco de aceite todas las verduras (habas, guisantes y pimientos rojos).\n Una vez que estén bien sofritos, se deberá añadir la cebolla y cordero cocinados con anterioridad y que habíamos reservado. Llega el momento de condimentar al gusto.\n Añadir las patatas y, para terminar, el hinojo. Dejar cocinar hasta que las patatas estén blandas, removiendo con cuidado para evitar que las patatas se terminen rompiendo.",
        "img" : "../../../../assets/imagenes/Comida-Espanola/frito mallorquin.jpg",
        "pais" : "españolas"
      },
      {
        "nombre" : "Crema de Catalana",
        "ingredientes1" : "1 litro de leche 6 yemas de huevo\n 200 gramos de azúcar\n 40 gramos de fécula de maíz\n La piel de media naranja y medio limón\n Una ramita de canela\n Fresas y frambuesas\n Doce ramitas de hierbabuena",
       "ingredientes2" : "",
        "preparacion" :"Calentar la leche con la piel de naranja, limón y la canela a fuego bajo hasta que la leche esté a punto de hervir. Apartar del fuego y tapar para dejar que la leche se infusione durante 30 minutos.\n Colocar en un recipiente las yemas de huevo, añadir la mitad del azúcar y mezclar lo justo para que se integre. Añadir la fécula de maíz hasta que la mezcla tome un color pálido.\n Pasar la leche por un colador fino sobre los huevos y mezclar hasta que esté todo bien integrado. Vaciar en una olla y dejar a fuego medio, moviendo constantemente con una cuchara de madera o una espátula de plástico.\n Para saber cuándo alcance el punto adecuado, se debe formar una capa densa en el dorso de la cuchara. Pasa un dedo, si las fases se mantienen separadas, está lista.\n Quitar del fuego cuando esté en su punto. Colar nuevamente la crema, repartiéndola sobre 6 cazuelitas. Dejar enfriar antes de cubrirlas con plástico y meterlas en el refrigerador durante al menos 4 horas, aunque lo ideal es dejarlas toda la noche.\n Cuando estén bien cuajadas y a punto de ser servidas, añadir un poco de azúcar por encima y con la ayuda de un soplete de cocina, caramelizar.\n Servir de inmediato y adornar con media fresa, media frambuesa y dos ramitas de hierbabuena, cuidando no quemarte con el azúcar.",
        "img" : "../../../../assets/imagenes/Comida-Espanola/crema de catalana.jpg",
        "pais" : "españolas"
      
      },
      {
"nombre" : "Tacos de cochinita pibil", 
"ingredientes1" : "1 kg de maciza de cerdo \n 1 taza de jugo de naranja \n 3 chiles habaneros en rodajas\n 1 cubo de achiote \n3 chiles guajillo hidratados \n1 taza de vinagre de manzana",
"ingredientes2" : "½ taza de hojas de cilantro \n 1 cda. de orégano \n1 cda. de hojas de laurel seco \n4 limones \n 1 cebolla morada fileteada ",
"preparacion" :"Licua el jugo, achiote, guajillo,vinagre, orégano, laurel y salpimienta.\n Vierte la salsa sobre la carne en una olla exprés y cósela durante 30 minutos.\n Mezcla la cebolla, chile, vinagre y orégano en un tazón.\n Sirve la cochinita en tacos, acompaña con la cebolla de manzanos y termina con cilantro",
"img" : "../../../../assets/imagenes/Comida-Mexicana/tacoscochinita.jpg",
"pais" : "mexicanas"
},

{"nombre" : "Arroz con leche",
"ingredientes1" : "1 taza de arroz \n4 tazas de agua \n 1 pieza de canela en rama \n1 sobre de Atole Sabor Cajeta Maizena® ",
"ingredientes2" : "5 tazas de leche descremada \n 1/2 taza de azúcar ",
"preparacion" :"Cocer en su totalidad el arroz en las 4 tazas de agua junto con la canela. \n Una vez que el arroz esté listo, colar si llega a tener mucha agua, retirar la canela y reservar. \n Una vez que el arroz esté listo, colar si llega a tener mucha agua, retirar la canela y reservar. \n Hervir el resto de la leche con el azúcar y cuando suelte el hervor, añadir la mezcla de Maizena® previamente disuelta. \n Dejar espesar sin dejar de mover y una vez que ha tomado consistencia agregar el arroz \n Cocinar todo por 5 minutos moviendo regularmente.\n Repartir en 6 moldes y servir tibio o frío. ",
"img" : "../../../../assets/imagenes/Comida-Mexicana/arroz con leche.jpg",
"pais" : "mexicanas"},

{"nombre" : "Asado verde",
"ingredientes1" : "900 grs. Lomo de Cerdo cortado en trozos pequeños \n 250 grs. Costillita de Cerdo cortada en trozos pequeños (opcional) \n·6-8 Tomatillos grandes\n·2 chiles Poblanos \n·2-3 chiles Jalapeños (agrega mas si te gusta mas picante) \n·1 Aguacate grande o 2 aguacates medianos \n·1 diente de Ajo ",
"ingredientes2" : "¼ taza de Cilantro Fresco \n·Sal al gusto \n·Pimienta Negra al gusto \n·Cominos molidos (opcional)",
"preparacion" :"Pela los tomatillos y colocalos en una ollita. Quitales el rabo a los chiles y colocalos en la misma ollita con los tomatillos. Agrega el agua suficiente para que estos ingredientes se cubran y cocinalos a fuego alto por 10-15 minutos o hasta que esten blandos.\nYa que los tomatillos y los chiles esten blandos, colocalos en la licuadora y agregales el aguacate, el ajo, el cilantro y una taza de agua, sazona con sal y pimienta al gusto (agrega una pizca de cominos si gustas!), muele a velocidad alta hasta que todo este bien combinado en una salsa suave. Reservala por un momento.\nEn una cacerola a fuego medio-alto dora la carne de puerco, (junto a la carne dora las costillitas), puedes agregar una cucharada de aceite si crees que lo necesita.  Sazona la carne con sal y pimienta al gusto, y cocinala  por unos 15 minutos o hasta que empiece a dorarse un poco.\nYa que la carne tome un poquito de color,  agregale la salsa verde, agrega mas agua si lo crees necesario para que el asado no te quede muy espeso,  cubrelo con una tapadera y cocina a fuego medio-alto hasta que hierva. \nYa que el asado este hirviendo, prueba el sabor, agrega mas sal y pimienta si lo crees necesario, baja el fuego a lo mas bajo y continua cocinando por 15 minutos mas para que la carne termine de cocerse. Ya que la carne este bien blandita, ahora si puedes servir. ",
"img" : "../../../../assets/imagenes/Comida-Mexicana/asado verde.jpg","pais" : "mexicanas"},

{"nombre" : "Buñuelos",
"ingredientes1" : "4 huevos\n1/4 tazas de azúcar refinada\n1 taza de aceite vegetal\n1 taza de aceite vegetal\n1 cucharadita de polvo para hornear",
"ingredientes2" : "1 cucharadita de sal de mesa\n1 taza de azúcar refinada\n1 taza de azúcar refinada\naceite de canola, extra para freir.",
"preparacion" :"En un tazón grande mezcla los huevos con 1/4 de taza de azúcar y bate hasta que espesen y cobren un color amarillo fuerte.\nAgrega 1 taza de aceite. Mezcla por separado 1 1/2 tazas de harina, polvo para hornear y sal.\nIncorpora gradualmente a la mezcla de huevo y revuelve bien.\nColoca la masa sobre una superficie enharinada (una la 1/2 taza de harina restante). Amasa bien hasta que se sienta suave.\nForma 16 bolsas de masa. Extiende cada una con el rodillo hasta formar círculos de aproximadamente 12 cm de diámetro.\nDeja reposar sobre papel encerado y sin cubrir durante 10 minutos.\nCalienta el aceite extra a 175ºC en un sartén hondo.\nFríe los buñuelos cruos hasta que se doren, dando vuelta 1 vez.\nRetire el exceso de grasa con toallas de papel.\nEspolvorea con una mezcla de azúcar y canela. Guarda en un recipiente hermético.",
"img" : "../../../../assets/imagenes/Comida-Mexicana/buñuelos.jpg",
"pais" : "mexicanas"},

{"nombre" : "Chiles poblanos", 
"ingredientes1" : "5 Piezas Chile poblano pelados y desvenados\n1 Lata Frijoles refritos bayos\n200 Gramos Queso Panela cortados en tiras\n3 Piezas Clara de huevo\n1 Taza Harina de trigo",
"ingredientes2" : "3 Piezas Yema\n1/2 Taza Aceite de maíz para freír\n3 Piezas Jitomate\n1/4 Taza Puré de tomate\n1 Taza Agua\n2 Cubos Concentrado de Tomate con Pollo CONSOMATE®\n1/2 Cucharadita Orégano seco\n2 Cucharaditas Aceite de maíz.",
 "preparacion" :"Relleno\nRellena cada chile con 2 cucharadas de frijoles y con rebanadas de queso, ciérralos con un palillo para evitar que se salga el relleno; pásalos por la harina y reserva.\nLicúar y freír\nPara el caldillo, licua los jitomates, el agua, el Concentrado de Tomate con Pollo CONSOMATE® y el Orégano; cuela. En una cacerola calienta las dos cucharadas de aceite y fríe por 10 minutos o hasta que hierva.\nBatir y freír\nPor último, bate las claras hasta formar picos duros y agrega las yemas una por una sin dejar de batir; pasa los chiles por el capeado y fríelos en aceite caliente. Escurre sobre papel absorbente y pásalos al caldillo; sirve y ofrece.\nConsejo culinario\nSe recomienda mantener limpio el aceite mientras fríes los chiles para obtener mejor un mejor capeado.\nConsejo nutricional\nEl aceite vegetal se extrae de las estructuras oleaginosas de plantas, los aceites vegetales son ideales para la hidratación y nutrición, así mismo su contenido de ácidos grasos insatura los son benéficos para la salud ya que aportan más energía a nuestro organismo incluso mucho más que las proteínas, harinas y el alcohol.",
"img" : "../../../../assets/imagenes/Comida-Mexicana/chiles2.jpg",
"pais" : "mexicanas"},

{"nombre" : "Churros",
"ingredientes1" : "250 g. harina de trigo todo uso (también se puede hacer con harina de panadería)\n250 g. de agua\n1 cucharadita de sal (8 gramos aproximadamente)\nAzúcar para espolvorear",
"ingredientes2" : "Aceite de oliva suave para freír o aceite de girasol\nPapel absorbente de cocina\nUna churrera manual o una manga pastelera con boca fina.",
"preparacion" :"Ponemos la harina en un bol amplio. En una cazuela calentamos el agua con la sal.\nCuando empiece a hervir la vertemos directamente y de una sola vez sobre la harina. Con una cuchara de madera integramos la harina con el agua. Nos quedará una masa muy pegajosa y bastante compacta.\nAhora vamos a introducir esta masa en una churrera o manga pastelera. Este paso es fundamental para que los churros os salgan bien y no tengáis problemas con ellos a la hora de la fritura. La churrera compacta la masa y elimina el aire. Esto evita que los churros luego nos salten en el aceite, por eso es un paso muy importante. Si tenéis máquina para hacer churros la rellenáis con la masa. La mejor opción.\nSi no tenéis opción de hacer los churros con churrera, tenemos otra posibilidad, una manga pastelera con una boquilla en forma de estrella. Aunque no es lo recomendable, pues no quedan igual que con churrera. Aún así, hay gente que ha conseguido hacer buenos churros con manga. Las mangas pasteleras pueden ser de plástico desechable. Podéis encontrarlas en tiendas de utensilios de repostería o tiendas online de repostería creativa.\nVamos haciendo las porciones de churros con la masa cruda sobre un paño de cocina en la encimera. En una forma de que se vaya enfriando la masa y evitar que se abran o estallen durante la fritura.\nPonemos al fuego una sartén con abundante aceite de oliva muy suave o aceite de girasol.",
"img" : "../../../../assets/imagenes/Comida-Mexicana/churros.jpg",
"pais" : "mexicanas"},

{"nombre" : "Enchiladas potosinas",
"ingredientes1" : "75 gramos de chile ancho, desvenados y sin semillas\n1 taza de agua, caliente\n1 cucharada de mantequilla\n1 cucharada de aceite\n1/4 tazas de cebolla, finamente picada\n1 1/4 tazas de queso fresco, desmenuzado\n",
"ingredientes2" : "1/2 kilos de maíz, en masa\n1/2 cucharadas de sal\nal gusto de aceite, para freír.",
"preparacion" :"Asar los chiles y dejarlos remojando en agua caliente durante 25 minutos.\nHacerlos puré en un procesador de alimentos con 1/2 taza de agua en la que se remojaron.\nDerretir la mantequilla en un sartén chico y agregar la cebolla. Saltear hasta que se dore. Retirar del fuego y mezclar con el queso. Agregar 1 cucharada de los chiles molidos y mezclar. Reservar.\nPonga la masa de maíz en un recipiente y agregue el resto de los chiles molidos y la sal. Amasar durante 5 minutos hasta que los ingredientes estén totalmente mezclados. Cubrir con un trapo húmedo y dejar reposar por 20 minutos.\nTome bolitas de masa y ponga entre dos plásticos en un prensador de tortillas. Aplane y haga tortillas. Coloque un poco de la mezcla de queso en el centro de cada tortilla y doble la tortilla por la mitad. Presione los bordes para que se sellen.\n Repita con el resto de la masa y el relleno. (Salen como 12 enchiladas medianas).\nCaliente un comal y ase las enchiladas por 2-3 minutos de cada lado. La masa debe de cambiar de color y verse cocida.\nRellene un sartén con 1 cm de aceite para freír y ponga 2-3 enchiladas para que se frían por 3-4 minutos de cada lado.\nDeje escurrir sobre una toalla de papel.",
"img" : "../../../../assets/imagenes/Comida-Mexicana/enchiladas potosinas.jpg",
"pais" : "mexicanas"},

{"nombre" : "Enchiladas",
"ingredientes1" : "500 gramos de jitomate\n1/4 cebollas\n1 diente de ajo\n3 chiles de árbol\n1/2 tazas de agua\n12 tortillas de maíz, fritas\n5 gramos de pimienta",
"ingredientes2" : "10 gramos de sal\n1 rama de cilantro fresco, lavado y desinfectado\n1/2 pechugas de pollo, cocida y deshebrada\n5 hojas de lechuga, fileteada\n150 mililitros de crema ácida\n200 gramos de queso fresco.",
"preparacion" :"Licúa el jitomate,la cebolla,el ajo,los chiles y el agua hasta obtener una consistencia líquida.\nCuela la salsa,fríela en una sartén y sazona con sal y pimienta.\nRemoja las tortillas en la salsa, rellena cada tortilla con pollo y salsea.\nDecora las enchiladas con lechuga,crema ácida y queso.Ofrece.",
"img" : "../../../../assets/imagenes/Comida-Mexicana/enchiladas.jpg",
"pais" : "mexicanas"},


{"nombre" : "Gorditas",
"ingredientes1" : "1/2 cebollas, finamente picada\n1 taza de chicharrón, prensado\n1/2 kilos de masa de maíz\n2 tazas de manteca de cerdo, para freír\n1/2 tazas de queso fresco, desmoronado",
"ingredientes2" : "1/2 tazas de cebolla, finamente picada, para servir\n1/2 tazas de cilantro fresco, finamente picado, para servir\nal gusto de salsa verde, para acompañar",
"preparacion" :"Calienta una sartén a fuego medio agrega la cebolla blanca y cocina hasta que se suavice, añade el chicharrón prensado y cocina 10 minutos. Enfría y reserva.\nForma bolitas de masa, haz un orificio en el centro y rellena con el chicharrón. Aplana la masa para hacer la gordita, forma un círculo de 8 cm de diámetro.\nCalienta una ollita con la manteca, fríe las gorditas hasta que doren. Retira las gorditas y escurre sobre papel absorbente.\nCorta la gordita por la mitad rellena con queso, la cebolla y cilantro. Sirve con salsita. Disfruta.",
"img" : "../../../../assets/imagenes/Comida-Mexicana/gorditas.jpg",
"pais" : "mexicanas"},

{"nombre" : "Mole",
"ingredientes1" : "15 chiles anchos\n12 chiles mulatos y 12 chiles pasilla 6 chiles chipotles o morita 1/2  cebolla 1 cabeza de ajo 2 jitomates /n anís 2 o 3 rajitas de canela150 gr de uva pasa\n100 gr de pepita de calabaza peladas\n50 gr de almendras\n100 gr de cacahuate\n3 clavos (o la punta de una cucharita)\n1 piloncillo\n2 tortillas\n1 pieza de Chocolate Abuelita\n2 cucharas soperas de manteca de cerdo",
"ingredientes2" : "1 plátano macho\nPiezas de guajolote o pollo\n1 pza mediana de pan blanco\nSemillas de cilantro\n1 litro de caldo de pollo.",
"preparacion" :"El primer paso es limpiar todos los chiles quitándoles las semillas y los rabos. Una vez que termina esto, se tuestan en una sartén; no deben quemarse porque se amarga el mole. Todos los ingredientes van a pasar por el mismo procedimiento, se ponen a cocer en agua por separado, los chiles, los jitomates, los ajos y la cebolla van juntos. Por separado se ponen, una vez tostados, los demás ingredientes que son los que espesarán el mole. Una vez que ya hirvió todo, se muele el chile con el tomate, el ajo y la cebolla. En una cazuela de barro se pone a calentar la manteca y se agrega el piloncillo para que se vaya deshaciendo.Posteriormente y pasado por colador, se agrega la salsa de jitomate con ajo y cebolla.Lo mismo se hace con la espesadura y se deja sazonar muy bien a fuego medio porque salpica; se menea con cuchara de madera para que no se pegue al fondo de la olla. Agregar poco a poco el caldo y la sal, debe sazonarse por al menos 45 minutos para que el chile no quede crudo y tome bien su sabor. Finalmente, agregar el pollo ya cocido y se deja hervir otros 20 minutos. Debe quedar espesito, pero no seco. Se tuesta ajonjolí para ponerlo encima del mole. Se acompaña con arroz rojo, tortillitas calientes o pan blanco.",
"img" : "../../../../assets/imagenes/Comida-Mexicana/mole.jpg",
"pais" : "mexicanas"},

{"nombre" : "Pozole",
"ingredientes1" : "1 kilo de carne de cerdo, deshebrada 1 bolsa de maíz pozolero 3/4 cebollas 4 dientes de ajo 50 gramos de chile guajillo\n1 cubo de Knorr suiza",
"ingredientes2" : "Oréganos.",
"preparacion" :"Cocer en olla express la carne con 1/4 de cebolla, 1 ajo, agua hasta cubrir la carne y sal. Dejarla cocer por 45 minutos. Sacar la carne de la olla, deshebrar y apartar. En la misma agua de la carne poner a cocer el maíz y agregar un poco más de sal. Dejarlo cocer por 1 hora.\nServir el caldo, el maíz y la carne a una olla donde se va a terminar de cocer el pozole.\nLicuar 3 ajos, media cebolla, chile guajillo y el cubito de knorr. Colar la preparación y servir sobre el caldo.\nDejar cocinar el pozole mínimo 15 minutos. Prueba y rectifica de sal si es necesario.",
"img" : "../../../../assets/imagenes/Comida-Mexicana/pozole.jpg",
"pais" : "mexicanas"},

{"nombre" : "Caldo de res",
"ingredientes1" : "12 tazas de agua\n2 lbs de trozos de res con hueso\n1 cabeza de ajo\n2 hojas de laurel\n2 a 3 cucharadas de sal\n4 papas blancas cortadas en cubos de una pulgada\n3 chiles serranos cortados en trozos\n1 cebolla blanca pequeña cortada en cubos\n4 zanahorias cortadas gruesas",
"ingredientes2" : "3 elotes cortados en 9 trozos\n4 tazas de repollo verde cortado en trozos de una pulgada (green cabbage)\n½ taza de cilantro picado\n16 tortillas de maíz, si las deseas\n1 lima grande cortada en gajos, si la deseas",
"preparacion" :"En una olla grande y pesada, vierte las 10 tazas de agua, la carne de res, el ajo, las hojas de laurel y 1 1/2 cucharada de sal. Cocina hasta hervir, retirando la espuma de la parte superior, si es necesario. Tapa la olla, baja el fuego y continúa cocinando entre 1 1/2 hora y 2 horas o hasta que la carne esté blanda.\nEn la licuadora, agrega los chiles serranos, 1/2 cucharadita de sal y 1/4 taza de agua, licúa hasta que esté todo bien mezclado y reserva.\nUna vez que la carne esté blanda, retira las hojas de laurel y la cabeza de ajo. Agrega las papas en la olla, además de las cebollas, las zanahorias y los elotes. Añade las 2 tazas de agua restantes, prueba el caldo para determinar si tiene suficiente sal y condimenta a gusto. Deja que hierva, luego baja el fuego y continúa cocinando hasta que las papas estén tiernas cuando las pruebes con un tenedor.\nCuando las papas estén tiernas, retira los elotes y la carne de la sopa, transfiere a un recipiente grande y tapa para mantener todo caiente.\nAgrega el repollo (green cabagge) y 1/4 taza de cilantro a la sopa. Cocina durante otros 15 a 20 minutos, hasta que el repollo (col verde) esté tierno pero al dente. Retira la sopa del fuego y déjala reposar durante 15 minutos. Calienta las tortillas de maíz en un comal o sartén caliente y mantenlas tibias en un calentador de tortillas.\n6 Divide la sopa en 8 recipientes. Agrega el elote y un trozo de carne a cada recipiente. Decora con los gajos de lima, el cilantro y la salsa Serrano para agregar un toque picante.\n7 Puedes servir con tortillas de maíz tibias, si lo deseas.",
"img" : "../../../../assets/imagenes/Comida-Mexicana/Sin título-4.jpg",
"pais" : "mexicanas"},

{"nombre" : "Tacos al pastor",
"ingredientes1" : "2 chiles anchos, desvenados e hidratados\n2 chiles guajillos, desvenados e hidratados\n1/2 barras de pasta de achiote\n1/4 tazas de vinagre blanco\n1/2 tazas de jugo de naranja, agria\n4 cucharadas de aceite de maíz\n1 taza de cebolla, picada finamente",
"ingredientes2" : "1 taza de cilantro fresco, picado\n1 kilo de filete de cerdo, en bisteces, salpimentados\n1/2 cebollas, fileteada\n6 limones, partidos en cuartos\n2 tazas de salsa picante, a su elección\n1 taza de piña, natural asada y picada en trocitos",
"preparacion" :"Licúa los chiles, el achiote, el vinagre, el jugo de naranja y reservar.\nUnta la carne con la mezcla de achiote y cubre con el resto de la mezcla. Deja marinar 2 horas.\nEn una sartén bien caliente saltear con un poco de aceite la cebolla fileteada. Agrega la carne marinada hasta que este bien doradita.\nPica la carne ya cocinada para formar los tacos.\nAcompaña con cebolla, cilantro, limón, piña y salsita.\n","img" : "../../../../assets/imagenes/Comida-Mexicana/tacos.jpg",
"pais" : "mexicanas"},

{"nombre" : "Tinga",
"ingredientes1" : "suficiente de agua \n 1/4 cebollas\n1 cabeza de ajo\nsuficiente de cilantro fresco\n2 pechugas de pollo\n6 jitomates\n1/3 cebollas\n2 dientes de ajo",
"ingredientes2" : "220 gramos de chile chipotle\n1 taza de caldo de pollo\n2 cucharadas de aceite vegetal\n2 cebollas\nsuficiente de sal y pimienta",
"preparacion" :"En una olla hierve el agua y cocina el pollo con la cebolla, el ajo, el cilantro y un poco de sal alrededor de 50 minutos o hasta que esté cocido. Reserva el caldo y desmenuza el pollo.\nPara el caldillo, licúa los jitomates con la cebolla, el ajo, el chile chipotle, una taza de caldo de pollo, sal y pimienta hasta obtener una mezcla tersa.\nEn un sartén profundo, cocina la cebolla fileteada con el aceite hasta que esté transparente. Agrega el caldillo, deja que suelte el hervor y cocina alrededor de 20 minutos. Añade el pollo, sazona y cocina 10 minutos más. Sirve y acompaña con tostadas y frijoles.",
"img" : "../../../../assets/imagenes/Comida-Mexicana/tinga.jpg",
"pais" : "mexicanas"
},

{"nombre" : "Barbacoa de res en olla de presion",
"ingredientes1" : "1 1/2 libras de carne de res para barbacoa\n2 cucharadas de sal\n2 tazas de agua\n5 dientes de ajo pelados\n3 hojas de laurel",
"ingredientes2" : "10 pimientas negras enteras\n2 cucharaditas de orégano seco\n1/2 cebolla blanca",
"preparacion" :"Corta la carne de res en pedazos medianos y ponle sal por todos lados. Deja aparte.\nAgrega las dos tazas de agua a la olla de presión. Añade dientes de ajo, hojas de laurel, pimienta y orégano. Cubre con la rejilla de la olla de presión.\nColoca la carne de res y la cebolla sobre la rejilla. Cierra la olla de presión y coloca la válvula de presión en su lugar (de acuerdo a tu propia olla). Cocina a fuego alto hasta que empiece a chillar, después baja la temperatura de manera tal que la válvula de presión se mueva suavemente pero constantemente.\nCuece la carne de acuerdo a las instrucciones de tu olla, en la mía fueron sólo 23 minutos.\nCon cuidado abre la olla, saca la carne (guardada) un poco de caldo de la cocción en caso de que necesites recalentar la carne, de esta forma no se secará) y desmenúzala con dos tenedores. Estará tan blandita que no te dará ningún trabajo.\nSirve en tacos con jugo de limón, cebolla y cilantro picaditos y salsa roja martajada o salsa verde, o salsa de aguacate o pico de gallo.",
"img" : "../../../../assets/imagenes/Comida-Mexicana/barbacoa.jpg",
"pais" : "mexicanas"},

{"nombre" : "Pescado a la veracruzana",
"ingredientes1" : "4 filetes de pescado blanco\n1 cebolla en medias lunas\n4 c de jitomates guajes, picados y sin cáscara\n3 dientes de ajo\nde taza de alcaparras",
"ingredientes2" : "c de aceitunas verdes, en lunas\nc de perejil\n1 lata de chiles güeros\n3 tbsp. de aceite de oliva",
"preparacion" :"En una sartén grande calienta el aceite de oliva. Fríe la cebolla y el ajo hasta que se sofrían y transparenten.\nAñade el jitomate. Fríe por 10 minutos o hasta que el jitomate se empiece a deshacer.\nAgrega el perejil, las alcaparras, las aceitunas y los chiles güeros. Salpimienta y reduce el fuego al mínimo.\nMete los pescados a la salsa. Tapa y cocina por 10 minutos.\nSirve con una guarnición de arroz blanco."
,"img" : "../../../../assets/imagenes/Comida-Mexicana/pescado a la veracuzana.jpg",
"pais" : "mexicanas"},
]);
}
}



module.exports = RecetaSeeder
