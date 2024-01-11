+ add close button
+ show info
+ add experience
+ add some items as loot
+ improve item names
+ add pocket items
+ implement skill page
+ add monsters
+ save
+ fixed pocket update on use
+ add some skills to skill-tree
+ fix enemy disapear on screen change
+ add game play loop
- config first 100 monsters
    hp 3 / dmg 2 / speed 2000
    healing
    money
    additional exp
    all loot in list
- add NPC
- add timeout for skills
- add magic and rare weapons
- add elemental attacks
- add unique
- add set
- add jewels
- add rune
- add superset
- add runeword
- add rune spell
- config first 1000 monsters
- add all loot
- add all skills
- add all monsters
- polish balance
- polish presentation

# Гравець біжить вперед і зустрічає монстрів по черзі
після перемоги над 10 монстрами зустрічаємо НПЦ
? скільки є видів НПЦ?
після перемоги над 100 монстрами зустрічаємо мінібоса
? мабуть першого мінібоса ми перемагаємо лише з другої спроби
після 1000 монстрів зустрічаємо головного боса
після перемоги над головним босом показуємо титри, і напис що зʼявився сильниший бос
після перемоги над сильнішим босом зʼявляється найсильніший бос
перший бос є на 1000 монстрах, 2й на 2000, 3 на 5000
сила монстрів поступово зростає
? як саме зростає
є різні види монстрів
? скільки і які види
після перемоги над монстром нам дається лут і досвід
? скільки досвіду
# лут відрізняється по рівням, є 5ть рівнів
    деревʼяний
    камʼяний
    бронзовий
    срібний
    золотий
    ? золотий лут може дати сундук і ключ
    ? коли зібрав і сундук і ключ то можна його відчинити і знайти там вищі рівні луту
    аметистовий
    діамантовий
    райдужний
кожний наступний тип луту в тричі рідший за попередній
лут це карта на якій написано що вона дає, це може бути
    річ для інвентару
    річ в карман
    гроші
    додатковий досвід
    коштовності та руни
    додаткові предмети
## інвентар скаладається з 6 предметів
    зброя
    лати
    шолом
    взуття
    рукавиці
    щит
? чи треба можливість брати дві зброї
? чи треба дворучна зброя
? чи треба 7й слот для дальньої зброї, або дальнобійна як основна
### зброя - визначає силу удару, тобто кількість шкоди нанесеної монстру
### лати - зменшують шкоду яку отримує гравець, зменшення вирахочується в процентному співвідношення
    наприклад: лати можуть заблокувати 50% шкоди
### шолом - зменшують шкоду яку отримує гравець в абсолютному відношення
    наприклад: шолом може заблокувати 5ть одиниць шкоди
### взуття - визначає швидкість з якою гравець наносить удари
### рукавиці - визначаються з яким шансом гравець влучить чи промахнетьсяця
### щит - визначає з якою вірогідністю заблокує шкоду
## типи предметів
    предмети можуть бути:
        звичайні
        магічні
        рідкісні
        унікальні
        сетові
### звичайні
    мають тільки основний показник
### магічні
    крім основного показника мають 1-2 додаткових ефектів
### рідкісні
    мають 3-4 додаткових ефектів
### унікальні
    мають певні заздалегіть встановлені ефекти
### сетові
    крім заздалегіть встановлені ефектів
    можна зібрати інші предмету того ж сету що дасть додаткові ефекти
    кожний наступний предмет дає один додатковий ефект до вього сету
### суперсети
    виглядає майже як звичайний сет, або колір трохи відрізняється
    якщо зібрані всі предмети сету то його можна зібрати в один супер предмет
    який має ефекти якогось з предметів сету і ефекти всього сету
### мегасет
    деякі суперсети складаються в предмети які в свою чергу є речами з мега сету
    який має такуж логіку як сет, тобто кожен наступний предмет дає додатковий ефект
## рівні предметів
    предмети мають якусь кількість рівнів
    що визначає їхні основні покажники
    зброя:
        1 - 2-4
        2 - 4-6
        3 - 6-8
        4 - 8-10
        5 - 10-15
        6 - 15-20
        7 - 20-25
        8 - 25-30
        9 - 30-40
        10 - 40-50
        11 - 50-60
        12 - 60-80
        13 - 80-100
        14 - 100-120
        15 - 120-160
        16 - 160-200
        17 - 200-250
        18 - 250-300
        19 - 300-400
        20 - 400-500
    лати:
        1 - 5%-10%
        2 - 10%-15%
        3 - 15%-20%
        4 - 20%-30%
        5 - 30%-40%
        6 - 40%-50%
        7 - 50%-60%
        8 - 60%-70%
        9 - 70%-80%
        10 - 80%-90%
    шолом:
        1 - 1-5
        2 - 5-10
        3 - 10-20
        4 - 20-30
        5 - 30-50

        1 - 1-2
        2 - 2-5
        3 - 5-10
        4 - 10-20
        5 - 20-50
    взуття:
        1 - 1-2/sec
        2 - 2-3/sec
        3 - 3-4/sec
        4 - 4-6/sec
        5 - 6-8/sec
    рукавиці:
        1 - 20%-30%
        2 - 30%-40%
        3 - 40%-50%
        4 - 50%-70%
        5 - 70%-90%
    щит:
        1 - 5%-10%
        2 - 10%-15%
        3 - 15%-20%
        4 - 20%-25%
        5 - 25%-30%
        6 - 30%-40%
        7 - 40%-50%
        8 - 50%-60%
        9 - 60%-70%
        10 - 70%-80%
тобто силу предмета визначає рівень предмета і тип предмета
## розподіл луту
    деревʼяний (17)
        зброя 1з 2з 3з 4з 5з
        лати 1з 2з 3з
        шолом 1з 2з
        взуття 1з 2з
        рукавиці 1з 2з
        щит 1з 2з 3з
    камʼяний (20)
        зброя 5м 6з 6м 7з 7м 8з
        лати 3м 4з 4м 5з
        шолом 2м 3з
        взуття 2м 3з
        рукавиці 2м 3з
        щит 3м 4з 4м 5з
    бронзовий (22)
        зброя 8м 9з 9м 10з 10м 11з 11м 12з
        лати 5м 6з 6м 7з
        шолом 3м 4з
        взуття 3м 4з
        рукавиці 3м 4з
        щит 5м 6з 6м 7з
    срібний (30)
        зброя 9р 10р 11р 12м 12р 13з 13м 14з 14м 15з 16з
        лати 5р 6р 7м 8з 9з
        шолом 3р 4м 5з
        взуття 3р 4м 5з
        рукавиці 3р 4м 5з
        щит 5р 6р 7м 8з 9з
    золотий (34)
        зброя 13р 14р 15м 15р 16м 16р 17з 17м 17р 18з 18м 19з 20з
        лати 7р 8м 8р 9м 10з 10м
        шолом 4р 5м 5р
        взуття 4р 5м 5р
        рукавиці 4р 5м 5р
        щит 7р 8м 8р 9м 10з 10м
        сундук
        ключ
    аметистовий
        зброя 8р 19р 19м 20м 20р
        лати 9р 10р
        щит 9р 10р
        унікальні предмети
    діамантовий
        сети
    райдужний
        суперсети
## ??? чи має бути магічний рівень
## ефекти
## унікальні предмети
## сети
## мегасети
## ?????карман потрібен для того що б туди класти предмети які можна використати
    можливо не потрібен, оскільки якщо переносити туди предмети в будь який час то в ньому немає сенсу
    або можна вмикати кулдаун предмету при перенесенні
# досвід
# коштовності та руни
# додаткові предмет
# монстри
# NPC

# flow
    має бути нормально для гравця програти перед першим босом або на ньому
    але за другим раном треба вже подолати боса
    тому треба досягти достатньої сили що б подолати боса
    перед першим босом нам зустрічається перший сундук 70 разів
    другий сундук 22 рази, 3й 8 разів, 4й два рази
    що б 70 разів не траплялись одні і тіж предмети треба що б в 1му сундуку лижали не лише предмети
    звичайно там можуть бути ще додаткові предмети і коштовності
    але найлегше зробити що б там траплялись гроші, і лікування
    лікування має траплятись з такою періодичністю що б гравець зайшов достатньо
    але постійно був доволі поранений
    всього в першому сундуку 17 предметів
    можливо в кожному сундуку буде лежати 36 предметів
    такий чином останній сундук буде мати лише суперсетові предмети
    а перший сундук буде майже повністю зустрічатись двічі до повного боса
    тобто речі з першого сундука до першого боса можна буде побачити двічі
    таким чином в ньому буде 19 карт луту окрім предметів
        річ в карман
            2х лікувальне зілля
            2х зілля мани
        гроші
            5х
        додатковий досвід
            5х
        додаткові предмети
            5х ліікування
