// ========================================
// EXAMINATION OF CONSCIENCE - JAVASCRIPT
// Bilingual Web Application
// ========================================

// ========================================
// DATA: Examination Questions (Bilingual)
// ========================================

const examinationQuestions = [
    {
        id: 1,
        category: "Faith & Prayer",
        category_es: "Fe y Oración",
        question_en: "Did I deny or doubt God's existence?",
        question_es: "¿He negado o dudado de la existencia de Dios?",
        detail_en: "Denying or doubting God's existence is a serious sin against faith. God created us and loves us unconditionally.",
        detail_es: "Negar o dudar de la existencia de Dios es un pecado grave contra la fe. Dios nos creó y nos ama incondicionalmente.",
        examples_en: ["Questioning God's existence during difficult times", "Mocking religious beliefs", "Refusing to believe in God despite evidence"],
        examples_es: ["Cuestionar la existencia de Dios durante tiempos difíciles", "Burlarse de las creencias religiosas", "Rehusar creer en Dios a pesar de la evidencia"]
    },
    {
        id: 2,
        category: "Faith & Prayer",
        category_es: "Fe y Oración",
        question_en: "Did I refuse to believe God's revelation?",
        question_es: "¿He rehusado creer en la revelación de Dios?",
        detail_en: "God has revealed Himself through Scripture and Tradition. Refusing to believe His revelation is a rejection of His truth.",
        detail_es: "Dios se ha revelado a través de la Escritura y la Tradición. Rehusar creer en Su revelación es un rechazo a Su verdad.",
        examples_en: ["Rejecting Church teachings", "Denying biblical truths", "Refusing to accept God's word"],
        examples_es: ["Rechazar las enseñanzas de la Iglesia", "Negar verdades bíblicas", "Rehusar aceptar la palabra de Dios"]
    },
    {
        id: 3,
        category: "Faith & Prayer",
        category_es: "Fe y Oración",
        question_en: "Did I believe in (or use) horoscopes, fortune telling, tarot cards, Ouija boards or reincarnation?",
        question_es: "¿He creído o consultado en horóscopos, en la limpia con el huevo, en los que leen las cartas, el futuro, la tabla de ouija, o en la reencarnación?",
        detail_en: "These practices involve seeking guidance from sources other than God and can lead to spiritual danger.",
        detail_es: "Estas prácticas implican buscar orientación de fuentes distintas a Dios y pueden llevar a peligro espiritual.",
        examples_en: ["Reading horoscopes regularly", "Visiting fortune tellers", "Using Ouija boards or tarot cards"],
        examples_es: ["Leer horóscopos regularmente", "Visitar adivinos", "Usar tablas de ouija o cartas de tarot"]
    },
    {
        id: 4,
        category: "Faith & Prayer",
        category_es: "Fe y Oración",
        question_en: "Did I deny that I was a Catholic?",
        question_es: "¿He negado que soy católico?",
        detail_en: "Denying our faith is a serious sin. We should be proud of our Catholic identity and witness to it.",
        detail_es: "Negar nuestra fe es un pecado grave. Deberíamos estar orgullosos de nuestra identidad católica y dar testimonio de ella.",
        examples_en: ["Hiding Catholic faith to fit in", "Denying being Catholic when asked", "Being ashamed of the Church"],
        examples_es: ["Ocultar la fe católica para encajar", "Negar ser católico cuando preguntan", "Avergonzarse de la Iglesia"]
    },
    {
        id: 5,
        category: "Faith & Prayer",
        category_es: "Fe y Oración",
        question_en: "Did I abandon the Catholic Faith for any period of time?",
        question_es: "¿He abandonado la Fe Católica por algún período de tiempo?",
        detail_en: "Abandoning the faith means turning away from God and His Church. It's important to return and reconcile.",
        detail_es: "Abandonar la fe significa alejarse de Dios y Su Iglesia. Es importante regresar y reconciliarse.",
        examples_en: ["Stopping Mass attendance", "Leaving the Church", "Rejecting Catholic practices"],
        examples_es: ["Dejar de asistir a Misa", "Abandonar la Iglesia", "Rechazar prácticas católicas"]
    },
    {
        id: 6,
        category: "Faith & Prayer",
        category_es: "Fe y Oración",
        question_en: "Did I despair of or presume on God's mercy?",
        question_es: "¿He desesperado de o presumido de la misericordia de Dios?",
        detail_en: "Despair means giving up on God's forgiveness. Presumption means thinking we can sin without consequences.",
        detail_es: "La desesperación significa renunciar al perdón de Dios. La presunción significa pensar que podemos pecar sin consecuencias.",
        examples_en: ["Thinking God can't forgive me", "Sinning deliberately thinking God will forgive anyway", "Losing hope in salvation"],
        examples_es: ["Pensar que Dios no puede perdonarme", "Pecar deliberadamente pensando que Dios perdonará de todos modos", "Perder la esperanza en la salvación"]
    },
    {
        id: 7,
        category: "Faith & Prayer",
        category_es: "Fe y Oración",
        question_en: "Did I neglect prayer for a long time?",
        question_es: "¿He dejado de orar por largo tiempo?",
        detail_en: "Prayer is our communication with God. Neglecting prayer weakens our relationship with Him.",
        detail_es: "La oración es nuestra comunicación con Dios. Descuidar la oración debilita nuestra relación con Él.",
        examples_en: ["Not praying for weeks or months", "Forgetting to pray daily", "Treating prayer as unimportant"],
        examples_es: ["No orar por semanas o meses", "Olvidar orar diariamente", "Tratar la oración como algo sin importancia"]
    },
    {
        id: 8,
        category: "Faith & Prayer",
        category_es: "Fe y Oración",
        question_en: "Did I fail to pray daily?",
        question_es: "¿He fallado en mis oraciones diarias?",
        detail_en: "Daily prayer strengthens our faith and keeps us close to God. It's essential for spiritual growth.",
        detail_es: "La oración diaria fortalece nuestra fe y nos mantiene cerca de Dios. Es esencial para el crecimiento espiritual.",
        examples_en: ["Skipping daily prayers", "Forgetting morning or evening prayers", "Being too busy to pray"],
        examples_es: ["Saltar las oraciones diarias", "Olvidar las oraciones de la mañana o noche", "Estar demasiado ocupado para orar"]
    },
    {
        id: 9,
        category: "Faith & Prayer",
        category_es: "Fe y Oración",
        question_en: "Did I blaspheme God or take God's Name in vain, curse or break an oath or vow?",
        question_es: "¿He blasfemado, usando el nombre de Dios en vano, o he roto un juramento?",
        detail_en: "God's name is holy and should be used with reverence. Blasphemy and taking His name in vain are serious offenses.",
        detail_es: "El nombre de Dios es santo y debe usarse con reverencia. La blasfemia y usar Su nombre en vano son ofensas graves.",
        examples_en: ["Using God's name as an exclamation", "Making false promises in God's name", "Cursing using holy names"],
        examples_es: ["Usar el nombre de Dios como exclamación", "Hacer promesas falsas en nombre de Dios", "Maldecir usando nombres santos"]
    },
    {
        id: 10,
        category: "Mass & Sacraments",
        category_es: "Misa y Sacramentos",
        question_en: "Did I miss Mass on a Sunday or on a Holy Day of Obligation through my own fault?",
        question_es: "¿He faltado a Misa los domingos o días de precepto sin razón seria?",
        detail_en: "Sunday Mass is obligatory for Catholics. Missing it without serious reason is a grave sin.",
        detail_es: "La Misa dominical es obligatoria para los católicos. Faltar a ella sin razón grave es un pecado mortal.",
        examples_en: ["Choosing leisure activities over Mass", "Being too lazy to attend", "Missing Mass without valid reason"],
        examples_es: ["Elegir actividades de ocio sobre la Misa", "Ser demasiado perezoso para asistir", "Faltar a Misa sin razón válida"]
    },
    {
        id: 11,
        category: "Mass & Sacraments",
        category_es: "Misa y Sacramentos",
        question_en: "Am I always reverent in the presence of the Most Blessed Sacrament?",
        question_es: "¿He fallado en guardar reverencia en la presencia del Santísimo Sacramento?",
        detail_en: "The Blessed Sacrament is Jesus Himself. We must always show reverence in His presence.",
        detail_es: "El Santísimo Sacramento es Jesús mismo. Debemos mostrar siempre reverencia en Su presencia.",
        examples_en: ["Talking loudly in church", "Dressing immodestly for Mass", "Not genuflecting before the tabernacle"],
        examples_es: ["Hablar fuerte en la iglesia", "Vestir de manera imodesta para la Misa", "No hacer genuflexión ante el sagrario"]
    },
    {
        id: 12,
        category: "Mass & Sacraments",
        category_es: "Misa y Sacramentos",
        question_en: "Was I voluntarily inattentive at Mass?",
        question_es: "¿He estado inatento en la Misa?",
        detail_en: "Mass is the highest form of prayer. We should be fully present and attentive to the liturgy.",
        detail_es: "La Misa es la forma más alta de oración. Debemos estar plenamente presentes y atentos a la liturgia.",
        examples_en: ["Daydreaming during Mass", "Looking at phone during liturgy", "Not listening to readings or homily"],
        examples_es: ["Soñar despierto durante la Misa", "Mirar el teléfono durante la liturgia", "No escuchar las lecturas u homilía"]
    },
    {
        id: 13,
        category: "Mass & Sacraments",
        category_es: "Misa y Sacramentos",
        question_en: "Did I arrive at Mass late through my own fault?",
        question_es: "¿He llegado tarde a Misa?",
        detail_en: "Arriving late disrupts our own prayer and others'. We should arrive on time out of respect for God.",
        detail_es: "Llegar tarde interrumpe nuestra propia oración y la de otros. Debemos llegar a tiempo por respeto a Dios.",
        examples_en: ["Consistently arriving late", "Not planning ahead to be on time", "Treating Mass start time casually"],
        examples_es: ["Llegar tarde consistentemente", "No planificar con anticipación para llegar a tiempo", "Tratar la hora de inicio de la Misa con casualidad"]
    },
    {
        id: 14,
        category: "Mass & Sacraments",
        category_es: "Misa y Sacramentos",
        question_en: "Did I leave Mass early?",
        question_es: "¿Me he ido antes de terminar la Misa?",
        detail_en: "Leaving Mass early shows lack of reverence. We should stay until the final blessing.",
        detail_es: "Salirse de la Misa temprano muestra falta de reverencia. Debemos quedarnos hasta la bendición final.",
        examples_en: ["Leaving before final blessing", "Leaving early for convenience", "Not respecting the full liturgy"],
        examples_es: ["Salir antes de la bendición final", "Salirse temprano por conveniencia", "No respetar la liturgia completa"]
    },
    {
        id: 15,
        category: "Mass & Sacraments",
        category_es: "Misa y Sacramentos",
        question_en: "Did I do unnecessary servile work on Sunday?",
        question_es: "¿He hecho trabajos innecesarios en los domingos?",
        detail_en: "Sunday is a day of rest and worship. Unnecessary work should be avoided.",
        detail_es: "El domingo es un día de descanso y adoración. El trabajo innecesario debe evitarse.",
        examples_en: ["Doing regular work on Sunday", "Shopping unnecessarily on Sunday", "Not keeping Sunday as a day of rest"],
        examples_es: ["Hacer trabajo regular el domingo", "Compras innecesarias el domingo", "No mantener el domingo como día de descanso"]
    },
    {
        id: 16,
        category: "Family & Authority",
        category_es: "Familia y Autoridad",
        question_en: "Did I disobey or disrespect my parents or legitimate superiors?",
        question_es: "¿He desobedecido o faltado el respeto a mis padres o superiores?",
        detail_en: "The Fourth Commandment requires us to honor and respect our parents and legitimate authorities.",
        detail_es: "El Cuarto Mandamiento nos exige honrar y respetar a nuestros padres y autoridades legítimas.",
        examples_en: ["Talking back to parents", "Disobeying reasonable rules", "Showing disrespect to authority"],
        examples_es: ["Contestar a los padres", "Desobedecer reglas razonables", "Mostrar falta de respeto a la autoridad"]
    },
    {
        id: 17,
        category: "Family & Authority",
        category_es: "Familia y Autoridad",
        question_en: "Did I neglect my duties to my husband, wife, children or parents?",
        question_es: "¿He descuidado mis obligaciones hacia mi esposo, esposa, hijos o padres?",
        detail_en: "We have serious obligations to our family members. Neglecting these duties is a sin.",
        detail_es: "Tenemos obligaciones serias hacia nuestros familiares. Descuidar estos deberes es un pecado.",
        examples_en: ["Not spending time with family", "Ignoring family needs", "Failing to support family members"],
        examples_es: ["No pasar tiempo con la familia", "Ignorar las necesidades familiares", "Fallar en apoyar a los miembros de la familia"]
    },
    {
        id: 18,
        category: "Family & Authority",
        category_es: "Familia y Autoridad",
        question_en: "Did I fail to actively take an interest in the religious education and formation of my children?",
        question_es: "¿He fallado en poner interés en la educación religiosa de mis hijos?",
        detail_en: "Parents have the primary duty to educate their children in the faith. This is a sacred responsibility.",
        detail_es: "Los padres tienen el deber primario de educar a sus hijos en la fe. Esta es una responsabilidad sagrada.",
        examples_en: ["Not teaching children about God", "Failing to bring children to Mass", "Not praying with children"],
        examples_es: ["No enseñar a los hijos sobre Dios", "Fallar en llevar a los hijos a Misa", "No orar con los hijos"]
    },
    {
        id: 19,
        category: "Family & Authority",
        category_es: "Familia y Autoridad",
        question_en: "Have I failed to educate myself concerning the teachings of the Church?",
        question_es: "¿He fallado en educarme con relación a las enseñanzas de la Iglesia?",
        detail_en: "As Catholics, we have a duty to learn and understand our faith. Ignorance is not an excuse.",
        detail_es: "Como católicos, tenemos el deber de aprender y entender nuestra fe. La ignorancia no es una excusa.",
        examples_en: ["Not reading Catholic teachings", "Avoiding religious education", "Being indifferent to learning about faith"],
        examples_es: ["No leer enseñanzas católicas", "Evitar la educación religiosa", "Ser indiferente a aprender sobre la fe"]
    },
    {
        id: 20,
        category: "Work & Justice",
        category_es: "Trabajo y Justicia",
        question_en: "Did I give a full day's work in return for a full day's pay?",
        question_es: "¿He fallado en dar el máximo en mi trabajo por el salario recibido?",
        detail_en: "We have an obligation to work honestly and diligently. Stealing time from employers is a sin.",
        detail_es: "Tenemos la obligación de trabajar con honestidad y diligencia. Robar tiempo a los empleadores es un pecado.",
        examples_en: ["Slacking off at work", "Doing personal activities during work time", "Not giving full effort"],
        examples_es: ["Holgazanear en el trabajo", "Hacer actividades personales durante el tiempo de trabajo", "No dar el máximo esfuerzo"]
    },
    {
        id: 21,
        category: "Work & Justice",
        category_es: "Trabajo y Justicia",
        question_en: "Did I give a fair wage to my employee(s)?",
        question_es: "¿He fallado en pagar un salario justo a mis empleados?",
        detail_en: "Employers have a moral obligation to pay just wages. Exploiting workers is a grave sin.",
        detail_es: "Los empleadores tienen la obligación moral de pagar salarios justos. Explotar a los trabajadores es un pecado grave.",
        examples_en: ["Paying below minimum wage", "Withholding earned wages", "Taking advantage of workers"],
        examples_es: ["Pagar por debajo del salario mínimo", "Retener salarios ganados", "Aprovecharse de los trabajadores"]
    },
    {
        id: 22,
        category: "Work & Justice",
        category_es: "Trabajo y Justicia",
        question_en: "Did I deliberately fail to fulfill my contracts or to pay my bills?",
        question_es: "¿He fallado deliberadamente en cumplir con mis contratos o en pagar mis cuentas?",
        detail_en: "We must honor our commitments and pay our debts. Breaking contracts and not paying bills is dishonest.",
        detail_es: "Debemos honrar nuestros compromisos y pagar nuestras deudas. Romper contratos y no pagar cuentas es deshonesto.",
        examples_en: ["Not paying bills on time", "Breaking business contracts", "Avoiding financial obligations"],
        examples_es: ["No pagar cuentas a tiempo", "Romper contratos comerciales", "Evitar obligaciones financieras"]
    },
    {
        id: 23,
        category: "Work & Justice",
        category_es: "Trabajo y Justicia",
        question_en: "Did I give or accept bribes?",
        question_es: "¿He dado o aceptado sobornos?",
        detail_en: "Bribery corrupts justice and honesty. It's a serious sin against truth and fairness.",
        detail_es: "El soborno corrompe la justicia y la honestidad. Es un pecado grave contra la verdad y la equidad.",
        examples_en: ["Offering money for favors", "Accepting bribes", "Corrupt practices in business"],
        examples_es: ["Ofrecer dinero por favores", "Aceptar sobornos", "Prácticas corruptas en los negocios"]
    },
    {
        id: 24,
        category: "Work & Justice",
        category_es: "Trabajo y Justicia",
        question_en: "Did I rashly gamble or speculate or deprive my family of the necessities of life?",
        question_es: "¿He malgastado en juegos del azar? ¿He privado a mi familia de sus necesidades diarias?",
        detail_en: "Excessive gambling can lead to financial ruin and harm families. We must be responsible stewards.",
        detail_es: "El juego excesivo puede llevar a la ruina financiera y dañar a las familias. Debemos ser administradores responsables.",
        examples_en: ["Gambling away family money", "Ignoring family needs for gambling", "Addiction to gambling"],
        examples_es: ["Jugar el dinero de la familia", "Ignorar las necesidades familiares por el juego", "Adicción al juego"]
    },
    {
        id: 25,
        category: "Charity & Speech",
        category_es: "Caridad y Palabra",
        question_en: "Was I impatient, angry, envious, unkind, proud, jealous, revengeful, hateful toward others or lazy?",
        question_es: "¿He sido impaciente, cruel, o perezoso; he tenido coraje, envidia, celos, venganza, o he odiado al prójimo?",
        detail_en: "We are called to love our neighbors. Negative emotions and behaviors harm our relationships and offend God.",
        detail_es: "Estamos llamados a amar a nuestro prójimo. Las emociones y comportamientos negativos dañan nuestras relaciones y ofenden a Dios.",
        examples_en: ["Losing temper easily", "Being jealous of others", "Holding grudges", "Being unkind to others"],
        examples_es: ["Perder el temperamento fácilmente", "Tener celos de otros", "Guardar rencor", "Ser desamable con otros"]
    },
    {
        id: 26,
        category: "Charity & Speech",
        category_es: "Caridad y Palabra",
        question_en: "Did I give bad example, abuse drugs, drink alcohol to excess, fight or quarrel?",
        question_es: "¿He dado mal ejemplo? ¿He abusado de drogas o licor; he peleado o discutido?",
        detail_en: "We must be good examples to others. Substance abuse and violence are serious sins.",
        detail_es: "Debemos ser buenos ejemplos para otros. El abuso de sustancias y la violencia son pecados graves.",
        examples_en: ["Getting drunk", "Using illegal drugs", "Starting fights", "Setting bad example for others"],
        examples_es: ["Embriagarse", "Usar drogas ilegales", "Iniciar peleas", "Dar mal ejemplo a otros"]
    },
    {
        id: 27,
        category: "Charity & Speech",
        category_es: "Caridad y Palabra",
        question_en: "Did I physically injure or kill anyone?",
        question_es: "¿He herido físicamente o he matado a alguien?",
        detail_en: "The Fifth Commandment forbids killing and physical harm. Violence is always wrong.",
        detail_es: "El Quinto Mandamiento prohíbe matar y causar daño físico. La violencia siempre está mal.",
        examples_en: ["Physical fighting", "Causing bodily harm", "Any form of violence"],
        examples_es: ["Peleas físicas", "Causar daño corporal", "Cualquier forma de violencia"]
    },
    {
        id: 28,
        category: "Charity & Speech",
        category_es: "Caridad y Palabra",
        question_en: "Have I had an abortion, or advised or supported an abortion?",
        question_es: "¿He tenido o aconsejado a otros a procurar un aborto?",
        detail_en: "Abortion is the taking of innocent human life. It's a grave sin and a crime against humanity.",
        detail_es: "El aborto es la toma de vida humana inocente. Es un pecado grave y un crimen contra la humanidad.",
        examples_en: ["Having an abortion", "Encouraging abortion", "Supporting abortion rights"],
        examples_es: ["Tener un aborto", "Animar el aborto", "Apoyar el derecho al aborto"]
    },
    {
        id: 29,
        category: "Charity & Speech",
        category_es: "Caridad y Palabra",
        question_en: "Did I participate in or approve of the grave evil known as 'mercy killing,' euthanasia or doctor assisted suicide?",
        question_es: "¿He participado en o aprobado el mal grave de eutanasia ('matar por piedad')?",
        detail_en: "Euthanasia and assisted suicide are grave offenses against the sanctity of life.",
        detail_es: "La eutanasia y el suicidio asistido son ofensas graves contra la santidad de la vida.",
        examples_en: ["Supporting euthanasia", "Assisting in suicide", "Approving 'mercy killing'"],
        examples_es: ["Apoyar la eutanasia", "Asistir en el suicidio", "Aprobar el 'asesinato por piedad'"]
    },
    {
        id: 30,
        category: "Charity & Speech",
        category_es: "Caridad y Palabra",
        question_en: "Did I attempt suicide or physically harm myself?",
        question_es: "¿He intentado suicidarme? ¿Me he lastimado deliberadamente?",
        detail_en: "Life is a gift from God. Self-harm and suicide are grave sins against the Creator.",
        detail_es: "La vida es un regalo de Dios. El auto-daño y el suicidio son pecados graves contra el Creador.",
        examples_en: ["Self-harm", "Suicide attempts", "Not caring for one's health"],
        examples_es: ["Auto-daño", "Intentos de suicidio", "No cuidar la propia salud"]
    },
    {
        id: 31,
        category: "Charity & Speech",
        category_es: "Caridad y Palabra",
        question_en: "Did I willfully entertain impure thoughts and desires?",
        question_es: "¿Por voluntad propia me he entretenido en pensamientos o deseos impuros?",
        detail_en: "Impure thoughts lead to impure actions. We must guard our minds and hearts.",
        detail_es: "Los pensamientos impuros llevan a acciones impuras. Debemos guardar nuestra mente y corazón.",
        examples_en: ["Lustful thoughts", "Fantasizing about impure acts", "Entertaining sinful desires"],
        examples_es: ["Pensamientos lujuriosos", "Fantasear con actos impuros", "Entretener deseos pecaminosos"]
    },
    {
        id: 32,
        category: "Charity & Speech",
        category_es: "Caridad y Palabra",
        question_en: "Did I dress immodestly or provocatively?",
        question_es: "¿Me he vestido inmodestamente o provocativamente?",
        detail_en: "Modesty in dress reflects respect for ourselves and others. Immodesty can lead others into sin.",
        detail_es: "La modestia en el vestir refleja respeto por nosotros mismos y otros. La inmodestia puede llevar a otros al pecado.",
        examples_en: ["Wearing revealing clothing", "Dressing to attract attention", "Not considering modesty"],
        examples_es: ["Vestir ropa reveladora", "Vestir para atraer atención", "No considerar la modestia"]
    },
    {
        id: 33,
        category: "Charity & Speech",
        category_es: "Caridad y Palabra",
        question_en: "Did I use impure or suggestive words?",
        question_es: "¿He usado palabras malas o insinuantes?",
        detail_en: "Our words should be pure and edifying. Impure speech corrupts both speaker and listener.",
        detail_es: "Nuestras palabras deben ser puras y edificantes. El habla impura corrompe tanto al hablante como al oyente.",
        examples_en: ["Using dirty jokes", "Making suggestive comments", "Inappropriate language"],
        examples_es: ["Usar chistes sucios", "Hacer comentarios insinuantes", "Lenguaje inapropiado"]
    },
    {
        id: 34,
        category: "Charity & Speech",
        category_es: "Caridad y Palabra",
        question_en: "Did I tell impure stories or listen to them?",
        question_es: "¿He contado o escuchado chistes impuros o historias impuras?",
        detail_en: "We should avoid impure conversations and entertainment. They corrupt the soul.",
        detail_es: "Debemos evitar conversaciones y entretenimientos impuros. Corrompen el alma.",
        examples_en: ["Telling dirty jokes", "Listening to inappropriate stories", "Participating in impure talk"],
        examples_es: ["Contar chistes sucios", "Escuchar historias inapropiadas", "Participar en conversaciones impuras"]
    },
    {
        id: 35,
        category: "Charity & Speech",
        category_es: "Caridad y Palabra",
        question_en: "Did I deliberately look at impure television, internet, plays, pictures or movies?",
        question_es: "¿He visto deliberadamente películas, revistas, videos o sitios pornográficos en el internet?",
        detail_en: "Pornography and impure entertainment are grave sins. They distort God's gift of sexuality.",
        detail_es: "La pornografía y el entretenimiento impuro son pecados graves. Distorsionan el regalo de Dios de la sexualidad.",
        examples_en: ["Watching pornography", "Looking at impure images", "Consuming immoral media"],
        examples_es: ["Ver pornografía", "Mirar imágenes impuras", "Consumir medios inmorales"]
    },
    {
        id: 36,
        category: "Charity & Speech",
        category_es: "Caridad y Palabra",
        question_en: "Did I deliberately read or send impure material?",
        question_es: "¿He leído o enviado material impuro?",
        detail_en: "Reading and sharing impure material spreads sin and corrupts others.",
        detail_es: "Leer y compartir material impuro difunde el pecado y corrompe a otros.",
        examples_en: ["Reading erotic literature", "Sending inappropriate messages", "Sharing impure content"],
        examples_es: ["Leer literatura erótica", "Enviar mensajes inapropiados", "Compartir contenido impuro"]
    },
    {
        id: 37,
        category: "Charity & Speech",
        category_es: "Caridad y Palabra",
        question_en: "Did I perform impure acts by myself (masturbation) or with another (adultery, fornication or sodomy)?",
        question_es: "¿He cometido actos impuros – solo (masturbación), o con otros (fornicación, adulterio, sodomía)?",
        detail_en: "Sexual sins are grave offenses against the sanctity of marriage and human dignity.",
        detail_es: "Los pecados sexuales son ofensas graves contra la santidad del matrimonio y la dignidad humana.",
        examples_en: ["Masturbation", "Adultery", "Fornication", "Homosexual acts"],
        examples_es: ["Masturbación", "Adulterio", "Fornicación", "Actos homosexuales"]
    },
    {
        id: 38,
        category: "Charity & Speech",
        category_es: "Caridad y Palabra",
        question_en: "Did I marry or advise another to marry outside of the Church?",
        question_es: "¿Contraje matrimonio o aconsejé a otro a casarse fuera de la Iglesia?",
        detail_en: "Catholics should marry in the Church. Marriage outside the Church without proper dispensation is invalid.",
        detail_es: "Los católicos deben casarse en la Iglesia. El matrimonio fuera de la Iglesia sin la debida dispensa es inválido.",
        examples_en: ["Getting married outside the Church", "Encouraging non-Catholic marriage", "Ignoring Church marriage laws"],
        examples_es: ["Casarse fuera de la Iglesia", "Animar el matrimonio no católico", "Ignorar las leyes matrimoniales de la Iglesia"]
    },
    {
        id: 39,
        category: "Charity & Speech",
        category_es: "Caridad y Palabra",
        question_en: "Did I abuse my marriage rights?",
        question_es: "¿He sido infiel a mis votos matrimoniales?",
        detail_en: "Marriage is a sacred bond. Abusing marriage rights or being unfaithful is a grave sin.",
        detail_es: "El matrimonio es un vínculo sagrado. Abusar de los derechos matrimoniales o ser infiel es un pecado grave.",
        examples_en: ["Marital infidelity", "Abusing conjugal rights", "Disrespecting marriage vows"],
        examples_es: ["Infidelidad marital", "Abusar de los derechos conyugales", "Faltar al respeto a los votos matrimoniales"]
    },
    {
        id: 40,
        category: "Charity & Speech",
        category_es: "Caridad y Palabra",
        question_en: "Have I kept company with someone else's spouse?",
        question_es: "¿He andado con el cónyuge del prójimo?",
        detail_en: "Inappropriate relationships with married people lead to adultery and destroy families.",
        detail_es: "Relaciones inapropiadas con personas casadas llevan al adulterio y destruyen familias.",
        examples_en: ["Flirting with married people", "Emotional affairs", "Inappropriate friendships with married persons"],
        examples_es: ["Coquetear con personas casadas", "Aventuras emocionales", "Amistades inapropiadas con personas casadas"]
    },
    {
        id: 41,
        category: "Charity & Speech",
        category_es: "Caridad y Palabra",
        question_en: "Did I practice artificial birth control or was I or my spouse permanently sterilized (tubal ligation or vasectomy)?",
        question_es: "¿He usado contracepción, o he sido o mi cónyuge ha sido esterilizado permanentemente?",
        detail_en: "Artificial birth control and sterilization are grave sins against the procreative purpose of marriage.",
        detail_es: "El control artificial de la natalidad y la esterilización son pecados graves contra el propósito procreativo del matrimonio.",
        examples_en: ["Using contraception", "Getting sterilized", "Supporting birth control"],
        examples_es: ["Usar contracepción", "Esterilizarse", "Apoyar el control de la natalidad"]
    },
    {
        id: 42,
        category: "Charity & Speech",
        category_es: "Caridad y Palabra",
        question_en: "Did I steal, cheat, help or encourage others to steal, cheat, or keep stolen goods?",
        question_es: "¿He robado, engañado, animado a otros a robar, o me he quedado con bienes robados?",
        detail_en: "Stealing is a violation of the Seventh Commandment. We must respect others' property.",
        detail_es: "Robar es una violación del Séptimo Mandamiento. Debemos respetar la propiedad de otros.",
        examples_en: ["Stealing", "Keeping stolen items", "Helping others steal", "Cheating"],
        examples_es: ["Robar", "Quedarse con artículos robados", "Ayudar a otros a robar", "Hacer trampa"]
    },
    {
        id: 43,
        category: "Charity & Speech",
        category_es: "Caridad y Palabra",
        question_en: "Have I made restitution for stolen goods?",
        question_es: "¿He fallado en dar restitución por bienes robados?",
        detail_en: "When we steal, we must make restitution. Keeping stolen goods is a continuing sin.",
        detail_es: "Cuando robamos, debemos hacer restitución. Quedarse con bienes robados es un pecado continuo.",
        examples_en: ["Not returning stolen items", "Not paying back what was stolen", "Keeping ill-gotten gains"],
        examples_es: ["No devolver artículos robados", "No pagar lo que fue robado", "Quedarse con ganancias ilícitas"]
    },
    {
        id: 44,
        category: "Charity & Speech",
        category_es: "Caridad y Palabra",
        question_en: "Did I tell lies? Deliberately in order to deceive or injure others? (slander or calumny)",
        question_es: "¿He dicho deliberadamente mentiras para engañar o dañar a otros?",
        detail_en: "Lying is a sin against truth. Slander and calumny damage others' reputations.",
        detail_es: "Mentir es un pecado contra la verdad. La calumnia y el falso testimonio dañan la reputación de otros.",
        examples_en: ["Telling lies", "Spreading false rumors", "Damaging reputations", "Deceiving others"],
        examples_es: ["Decir mentiras", "Difundir rumores falsos", "Dañar reputaciones", "Engañar a otros"]
    },
    {
        id: 45,
        category: "Charity & Speech",
        category_es: "Caridad y Palabra",
        question_en: "Did I commit perjury?",
        question_es: "¿He dado falso testimonio?",
        detail_en: "Perjury is lying under oath. It's a serious sin against justice and truth.",
        detail_es: "El perjurio es mentir bajo juramento. Es un pecado grave contra la justicia y la verdad.",
        examples_en: ["Lying in court", "False testimony under oath", "Breaking sworn statements"],
        examples_es: ["Mentir en court", "Falso testimonio bajo juramento", "Romper declaraciones juradas"]
    },
    {
        id: 46,
        category: "Charity & Speech",
        category_es: "Caridad y Palabra",
        question_en: "Did I vote in accordance with a properly informed conscience, in a way consistent with the teachings of the Church, in regard to the sanctity of marriage and of human life issues?",
        question_es: "¿He fallado en votar a conciencia bien formada de acuerdo a las enseñanzas de la Iglesia, y en respeto a la santidad de la vida humana?",
        detail_en: "Catholics must vote according to a well-formed conscience aligned with Church teaching, especially on life issues.",
        detail_es: "Los católicos deben votar según una conciencia bien formada alineada con la enseñanza de la Iglesia, especialmente en temas de vida.",
        examples_en: ["Voting for pro-abortion candidates", "Ignoring Church teaching in voting", "Supporting anti-life policies"],
        examples_es: ["Votar por candidatos pro-aborto", "Ignorar la enseñanza de la Iglesia al votar", "Apoyar políticas anti-vida"]
    },
    {
        id: 47,
        category: "Charity & Speech",
        category_es: "Caridad y Palabra",
        question_en: "Was I uncharitable in thought, word or deed?",
        question_es: "¿He sido poco caritativo de pensamiento, palabra u obra?",
        detail_en: "Charity is the greatest virtue. We must be charitable in all we do, say, and think.",
        detail_es: "La caridad es la virtud más grande. Debemos ser caritativos en todo lo que hacemos, decimos y pensamos.",
        examples_en: ["Judging others harshly", "Speaking unkindly", "Not helping those in need", "Holding grudges"],
        examples_es: ["Juzgar a otros duramente", "Hablar sin amabilidad", "No ayudar a los necesitados", "Guardar rencor"]
    },
    {
        id: 48,
        category: "Charity & Speech",
        category_es: "Caridad y Palabra",
        question_en: "Did I gossip or reveal the faults or sins of others? (detraction)",
        question_es: "¿He chismorreado o revelado faltas o pecados de otros?",
        detail_en: "Gossip and detraction harm others' reputations and are sins against charity.",
        detail_es: "El chisme y la detracción dañan la reputación de otros y son pecados contra la caridad.",
        examples_en: ["Spreading rumors", "Revealing others' secrets", "Speaking badly of others behind their backs"],
        examples_es: ["Difundir rumores", "Revelar secretos de otros", "Hablar mal de otros a sus espaldas"]
    },
    {
        id: 49,
        category: "Charity & Speech",
        category_es: "Caridad y Palabra",
        question_en: "Did I fail to keep secrets that I should have kept?",
        question_es: "¿He fallado en guardar secretos que se me han confiado?",
        detail_en: "Betraying confidence is a sin against trust and charity.",
        detail_es: "Traicionar la confianza es un pecado contra la confianza y la caridad.",
        examples_en: ["Revealing confidential information", "Breaking promises of secrecy", "Sharing others' secrets"],
        examples_es: ["Revelar información confidencial", "Romper promesas de secreto", "Compartir secretos de otros"]
    },
    {
        id: 50,
        category: "Charity & Speech",
        category_es: "Caridad y Palabra",
        question_en: "Did I eat meat knowingly on the Fridays during Lent or on Ash Wednesday? (Ages 14+)",
        question_es: "¿He comido carne los viernes de cuaresma o Miércoles de Ceniza?",
        detail_en: "Catholics must abstain from meat on Fridays during Lent and on Ash Wednesday.",
        detail_es: "Los católicos deben abstenerse de carne los viernes durante la Cuaresma y el Miércoles de Ceniza.",
        examples_en: ["Eating meat on Friday in Lent", "Eating meat on Ash Wednesday", "Ignoring abstinence rules"],
        examples_es: ["Comer carne el viernes de Cuaresma", "Comer carne el Miércoles de Ceniza", "Ignorar las reglas de abstinencia"]
    },
    {
        id: 51,
        category: "Charity & Speech",
        category_es: "Caridad y Palabra",
        question_en: "Did I fast as required on Ash Wednesday and Good Friday? (Ages 18-59)",
        question_es: "¿He fallado en ayunar el Miércoles de Ceniza y el Viernes Santo?",
        detail_en: "Catholics aged 18-59 must fast on Ash Wednesday and Good Friday, eating only one full meal.",
        detail_es: "Los católicos de 18-59 años deben ayunar el Miércoles de Ceniza y el Viernes Santo, comiendo solo una comida completa.",
        examples_en: ["Not fasting on Ash Wednesday", "Not fasting on Good Friday", "Eating more than allowed on fast days"],
        examples_es: ["No ayunar el Miércoles de Ceniza", "No ayunar el Viernes Santo", "Comer más de lo permitido en días de ayuno"]
    },
    {
        id: 52,
        category: "Charity & Speech",
        category_es: "Caridad y Palabra",
        question_en: "Did I fail to receive Holy Communion during the Easter Season?",
        question_es: "¿He fallado en recibir la Sagrada Comunión en el tiempo Pascual?",
        detail_en: "Catholics must receive Holy Communion at least once during the Easter Season.",
        detail_es: "Los católicos deben recibir la Sagrada Comunión al menos una vez durante el tiempo Pascual.",
        examples_en: ["Missing Easter Communion", "Not going to Communion during Easter", "Neglecting Easter duty"],
        examples_es: ["Perder la Comunión de Pascua", "No ir a Comunión durante la Pascua", "Descuidar el deber pascual"]
    },
    {
        id: 53,
        category: "Charity & Speech",
        category_es: "Caridad y Palabra",
        question_en: "Did I fail to confess my sins at least once a year?",
        question_es: "¿He fallado en confesar por lo menos una vez al año?",
        detail_en: "Catholics must confess their sins at least once a year, preferably during Lent.",
        detail_es: "Los católicos deben confesar sus pecados al menos una vez al año, preferiblemente durante la Cuaresma.",
        examples_en: ["Not going to confession for over a year", "Neglecting annual confession", "Avoiding the sacrament"],
        examples_es: ["No ir a confesión por más de un año", "Descuidar la confesión anual", "Evitar el sacramento"]
    },
    {
        id: 54,
        category: "Charity & Speech",
        category_es: "Caridad y Palabra",
        question_en: "Did I receive Holy Communion in the state of mortal sin?",
        question_es: "¿He recibido la Sagrada Comunión en el estado de pecado mortal?",
        detail_en: "Receiving Communion in mortal sin is a sacrilege. We must be in a state of grace.",
        detail_es: "Recibir la Comunión en pecado mortal es un sacrilegio. Debemos estar en estado de gracia.",
        examples_en: ["Receiving Communion unconfessed", "Going to Communion with mortal sin", "Not examining conscience before Communion"],
        examples_es: ["Recibir la Comunión sin confesar", "Ir a Comunión con pecado mortal", "No examinar la conciencia antes de la Comunión"]
    },
    {
        id: 55,
        category: "Charity & Speech",
        category_es: "Caridad y Palabra",
        question_en: "Did I receive Holy Communion without fasting for one hour or more from food and drink? (water and medicine are permitted)",
        question_es: "¿He recibido la Sagrada Comunión sin haber ayunado una hora antes?",
        detail_en: "We must fast for one hour before receiving Holy Communion (water and medicine permitted).",
        detail_es: "Debemos ayunar una hora antes de recibir la Sagrada Comunión (se permite el agua y medicina).",
        examples_en: ["Eating within an hour of Communion", "Drinking (except water) before Communion", "Not observing the Eucharistic fast"],
        examples_es: ["Comer dentro de la hora de la Comunión", "Beber (excepto agua) antes de la Comunión", "No observar el ayuno eucarístico"]
    },
    {
        id: 56,
        category: "Charity & Speech",
        category_es: "Caridad y Palabra",
        question_en: "Did I make a bad Confession by deliberately not telling all the mortal sins I had committed?",
        question_es: "¿He hecho una mala Confesión, escondiendo pecados mortales?",
        detail_en: "Deliberately hiding mortal sins in confession makes the confession invalid and is itself a mortal sin.",
        detail_es: "Ocultar deliberadamente pecados mortales en la confesión hace que la confesión sea inválida y es en sí mismo un pecado mortal.",
        examples_en: ["Hiding mortal sins", "Not being honest in confession", "Making incomplete confession"],
        examples_es: ["Ocultar pecados mortales", "No ser honesto en la confesión", "Hacer una confesión incompleta"]
    },
    {
        id: 57,
        category: "Charity & Speech",
        category_es: "Caridad y Palabra",
        question_en: "Did I fail to contribute to the support of the Church?",
        question_es: "¿He fallado en contribuir debidamente a las necesidades de la Iglesia?",
        detail_en: "Catholics have a duty to support the Church according to their means.",
        detail_es: "Los católicos tienen el deber de apoyar a la Iglesia según sus posibilidades.",
        examples_en: ["Not giving to the Church", "Ignoring Church financial needs", "Being stingy with Church support"],
        examples_es: ["No dar a la Iglesia", "Ignorar las necesidades financieras de la Iglesia", "Ser tacaño con el apoyo a la Iglesia"]
    },
    {
        id: 58,
        category: "Charity & Speech",
        category_es: "Caridad y Palabra",
        question_en: "Have I forgiven those who have hurt or harmed me or my loved ones?",
        question_es: "¿He rehusado perdonar a los que me han lastimado o han lastimado a mis seres queridos?",
        detail_en: "We must forgive others as God forgives us. Holding grudges is a sin against charity.",
        detail_es: "Debemos perdonar a otros como Dios nos perdona. Guardar rencor es un pecado contra la caridad.",
        examples_en: ["Holding grudges", "Refusing to forgive", "Seeking revenge", "Being bitter"],
        examples_es: ["Guardar rencor", "Rehusar perdonar", "Buscar venganza", "Ser amargado"]
    },
    {
        id: 59,
        category: "Charity & Speech",
        category_es: "Caridad y Palabra",
        question_en: "Did I give scandal by what I said or did, especially to the young?",
        question_es: "¿He sido causa de escándalo por lo que dije o hice, especialmente delante de los jóvenes?",
        detail_en: "Giving scandal means leading others into sin by our bad example. This is a serious offense.",
        detail_es: "Dar escándalo significa llevar a otros al pecado con nuestro mal ejemplo. Esta es una ofensa grave.",
        examples_en: ["Setting bad example for youth", "Leading others into sin", "Being a stumbling block"],
        examples_es: ["Dar mal ejemplo a los jóvenes", "Llevar a otros al pecado", "Ser una piedra de tropiezo"]
    },
    {
        id: 60,
        category: "Charity & Speech",
        category_es: "Caridad y Palabra",
        question_en: "Did I contribute to anyone's abandoning of the Catholic Faith?",
        question_es: "¿He sido la causa de que alguna persona haya abandonado su Fe Católica?",
        detail_en: "Leading others away from the faith is a grave sin. We should be witnesses to the truth.",
        detail_es: "Llevar a otros lejos de la fe es un pecado grave. Debemos ser testigos de la verdad.",
        examples_en: ["Encouraging others to leave the Church", "Being a bad example", "Leading others away from faith"],
        examples_es: ["Animar a otros a dejar la Iglesia", "Ser un mal ejemplo", "Llevar a otros lejos de la fe"]
    }
];

// ========================================
// GLOBAL VARIABLES
// ========================================

let currentLanguage = 'en'; // Default language: English
let selectedSins = new Set(); // Set to store selected sin IDs

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('examinationLanguage');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
    }
    
    // Load saved selections
    const savedSelections = localStorage.getItem('examinationSelections');
    if (savedSelections) {
        selectedSins = new Set(JSON.parse(savedSelections));
    }
    
    // Initialize the application
    renderQuestions();
    updateLanguage();
    updateLanguageToggle();
});

// ========================================
// LANGUAGE FUNCTIONS
// ========================================

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
    localStorage.setItem('examinationLanguage', currentLanguage);
    updateLanguage();
    updateLanguageToggle();
    renderQuestions(); // Re-render questions with new language
}

function updateLanguage() {
    // Update all elements with data-en and data-es attributes
    const elements = document.querySelectorAll('[data-en][data-es]');
    elements.forEach(element => {
        const text = element.getAttribute(`data-${currentLanguage}`);
        if (text) {
            element.textContent = text;
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage === 'en' ? 'en' : 'es';
}

function updateLanguageToggle() {
    const langIcon = document.getElementById('langIcon');
    const langText = document.getElementById('langText');
    
    if (currentLanguage === 'en') {
        langIcon.textContent = '🇪🇸';
        langText.textContent = 'Español';
    } else {
        langIcon.textContent = '🇬🇧';
        langText.textContent = 'English';
    }
}

// ========================================
// PAGE NAVIGATION
// ========================================

function showPage(pageNumber) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active-page');
    });
    
    // Show the requested page
    const targetPage = document.getElementById(`page${pageNumber}`);
    if (targetPage) {
        targetPage.classList.add('active-page');
        
        // If showing page 2 (review page), render selected sins
        if (pageNumber === 2) {
            renderSelectedSins();
        }
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// ========================================
// QUESTION RENDERING
// ========================================

function renderQuestions() {
    const container = document.getElementById('questions-container');
    container.innerHTML = '';
    
    // Group questions by category
    const categories = {};
    examinationQuestions.forEach(question => {
        const category = currentLanguage === 'en' ? question.category : question.category_es;
        if (!categories[category]) {
            categories[category] = [];
        }
        categories[category].push(question);
    });
    
    // Render each category
    for (const [categoryName, questions] of Object.entries(categories)) {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category-section';
        categoryDiv.innerHTML = `
            <h3 class="category-title">${categoryName}</h3>
        `;
        
        questions.forEach(question => {
            const questionDiv = document.createElement('div');
            questionDiv.className = `question-item ${selectedSins.has(question.id) ? 'selected' : ''}`;
            questionDiv.dataset.id = question.id;
            
            const questionText = currentLanguage === 'en' ? question.question_en : question.question_es;
            
            questionDiv.innerHTML = `
                <label class="question-label">
                    <input 
                        type="checkbox" 
                        class="question-checkbox" 
                        value="${question.id}"
                        ${selectedSins.has(question.id) ? 'checked' : ''}
                        onchange="toggleSin(${question.id})"
                    >
                    <span class="question-text">${questionText}</span>
                </label>
            `;
            
            container.appendChild(questionDiv);
        });
    }
}

// ========================================
// SELECTION MANAGEMENT
// ========================================

function toggleSin(sinId) {
    if (selectedSins.has(sinId)) {
        selectedSins.delete(sinId);
    } else {
        selectedSins.add(sinId);
    }
    
    // Update visual state
    const questionItem = document.querySelector(`.question-item[data-id="${sinId}"]`);
    if (questionItem) {
        if (selectedSins.has(sinId)) {
            questionItem.classList.add('selected');
        } else {
            questionItem.classList.remove('selected');
        }
    }
    
    // Save to localStorage
    localStorage.setItem('examinationSelections', JSON.stringify([...selectedSins]));
}

// ========================================
// REVIEW PAGE FUNCTIONS
// ========================================

function renderSelectedSins() {
    const container = document.getElementById('selected-sins-container');
    const noSelectionsMessage = document.getElementById('no-selections-message');
    
    if (selectedSins.size === 0) {
        container.style.display = 'none';
        noSelectionsMessage.style.display = 'block';
        return;
    }
    
    container.style.display = 'block';
    noSelectionsMessage.style.display = 'none';
    container.innerHTML = '';
    
    // Get selected questions
    const selectedQuestions = examinationQuestions.filter(q => selectedSins.has(q.id));
    
    // Group by category
    const categories = {};
    selectedQuestions.forEach(question => {
        const category = currentLanguage === 'en' ? question.category : question.category_es;
        if (!categories[category]) {
            categories[category] = [];
        }
        categories[category].push(question);
    });
    
    // Render each category
    for (const [categoryName, questions] of Object.entries(categories)) {
        const categoryHeader = document.createElement('h3');
        categoryHeader.className = 'category-header';
        categoryHeader.textContent = categoryName;
        categoryHeader.style.color = 'var(--primary-color)';
        categoryHeader.style.marginTop = '30px';
        categoryHeader.style.marginBottom = '15px';
        container.appendChild(categoryHeader);
        
        questions.forEach(question => {
            const accordionItem = document.createElement('div');
            accordionItem.className = 'accordion-item';
            
            const questionText = currentLanguage === 'en' ? question.question_en : question.question_es;
            const detailText = currentLanguage === 'en' ? question.detail_en : question.detail_es;
            const examples = currentLanguage === 'en' ? question.examples_en : question.examples_es;
            const examplesTitle = currentLanguage === 'en' ? 'Examples:' : 'Ejemplos:';
            
            accordionItem.innerHTML = `
                <div class="accordion-header" onclick="toggleAccordion(this)">
                    <span class="accordion-title">${questionText}</span>
                    <span class="accordion-icon">▼</span>
                </div>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <h4>${currentLanguage === 'en' ? 'Understanding this sin:' : 'Entendiendo este pecado:'}</h4>
                        <p>${detailText}</p>
                        <h4>${examplesTitle}</h4>
                        <ul>
                            ${examples.map(example => `<li>${example}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `;
            
            container.appendChild(accordionItem);
        });
    }
}

function toggleAccordion(header) {
    const accordionItem = header.parentElement;
    const isActive = accordionItem.classList.contains('active');
    
    // Close all accordions
    document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked accordion if it wasn't already open
    if (!isActive) {
        accordionItem.classList.add('active');
    }
}

// ========================================
// CONFESSION FUNCTIONS
// ========================================

function confessSins() {
    if (selectedSins.size === 0) {
        alert(currentLanguage === 'en' ? 
            'Please select at least one sin before confessing.' : 
            'Por favor seleccione al menos un pecado antes de confesar.');
        return;
    }
    
    // Show success modal
    const modal = document.getElementById('successModal');
    modal.classList.add('active');
    
    // Clear selections
    selectedSins.clear();
    localStorage.removeItem('examinationSelections');
    
    // Return to main page after 3 seconds
    setTimeout(() => {
        modal.classList.remove('active');
        showPage(1);
        renderQuestions();
    }, 3000);
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('successModal');
    if (event.target === modal) {
        modal.classList.remove('active');
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    // Escape key closes modal
    if (event.key === 'Escape') {
        const modal = document.getElementById('successModal');
        modal.classList.remove('active');
    }
});

// Prevent form submission on Enter key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && event.target.tagName !== 'TEXTAREA') {
        event.preventDefault();
    }
});