let fruits = [
    "Apple", "Apricot", "Avocado", "Acerola", "Abiu", "Ackee", "Araza",
    "Banana", "Blueberry", "Blackberry", "Breadfruit", "Boysenberry", "Barbados Cherry", "Bilberry",
    "Cherry", "Cranberry", "Coconut", "Currant", "Cantaloupe", "Calamansi", "Cherimoya",
    "Date", "Dragonfruit", "Durian", "Damson", "Dewberry", "Desert Lime", "Davidson's Plum",
    "Elderberry", "Eggfruit", "Entawak", "Emu Apple", "Etrog", "Evergreen Huckleberry", "Elephant Apple",
    "Fig", "Feijoa", "Finger Lime", "Fairchild Tangerine", "Forest Strawberry", "Flat Peach", "Fukushu Kumquat",
    "Grapes", "Guava", "Gooseberry", "Gac", "Golden Kiwi", "Goumi", "Governor's Plum",
    "Honeydew", "Huckleberry", "Horned Melon", "Hackberry", "Huito", "Hog Plum", "Hawthorn",
    "Indian Fig", "Indian Gooseberry", "Ice Apple", "Jackfruit", "Jujube", "Java Plum",
    "Kiwi", "Kumquat", "Kei Apple", "Lemon", "Lime", "Lychee", "Mango", "Melon", "Mulberry", "Nectarine", "Nance", "Nutmeg",
    "Orange", "Olive", "Oregon Grape", "Pineapple", "Papaya", "Peach", "Quince", "Queen Apple", "Quandong", "Raspberry", "Redcurrant", "Rambutan",
    "Strawberry", "Sapodilla", "Starfruit", "Tangerine", "Tomato", "Tamarind", "Ugli Fruit", "Ububese", "Uvaia",
    "Vanilla", "Velvet Apple", "Velvet Tamarind", "Watermelon", "Wolfberry", "White Mulberry", "Xigua", "Ximenia", "Xylocarpus",
    "Yellow Passionfruit", "Yunnan Hackberry", "Yangmei", "Zucchini", "Ziziphus", "Zinfandel Grape",
];

let sounds = {
    "Apple": "sounds/Apple.mp3",
    "Apricot": "sounds/Apricot.mp3",
    "Avocado": "sounds/Avocado.mp3",
    "Acerola": "sounds/Acerola.mp3",
    "Abiu": "sounds/Abiu.mp3",
    "Ackee": "sounds/Ackee.mp3",
    "Araza": "sounds/Araza.mp3",
    "Banana": "sounds/Banana.mp3",
    "Blueberry": "sounds/Blueberry.mp3",
    "Blackberry": "sounds/Blackberry.mp3",
    "Breadfruit": "sounds/Breadfruit.mp3",
    "Boysenberry": "sounds/Boysenberry.mp3",
    "Barbados Cherry": "sounds/Barbados_Cherry.mp3",
    "Bilberry": "sounds/Bilberry.mp3",
    "Cherry": "sounds/Cherry.mp3",
    "Cranberry": "sounds/Cranberry.mp3",
    "Coconut": "sounds/Coconut.mp3",
    "Currant": "sounds/Currant.mp3",
    "Cantaloupe": "sounds/Cantaloupe.mp3",
    "Calamansi": "sounds/Calamansi.mp3",
    "Cherimoya": "sounds/Cherimoya.mp3",
    "Date": "sounds/Date.mp3",
    "Dragonfruit": "sounds/Dragonfruit.mp3",
    "Durian": "sounds/Durian.mp3",
    "Damson": "sounds/Damson.mp3",
    "Dewberry": "sounds/Dewberry.mp3",
    "Desert Lime": "sounds/Desert_Lime.mp3",
    "Davidson's Plum": "sounds/Davidsons_Plum.mp3",
    "Elderberry": "sounds/Elderberry.mp3",
    "Eggfruit": "sounds/Eggfruit.mp3",
    "Entawak": "sounds/Entawak.mp3",
    "Emu Apple": "sounds/Emu_Apple.mp3",
    "Etrog": "sounds/Etrog.mp3",
    "Evergreen Huckleberry": "sounds/Evergreen_Huckleberry.mp3",
    "Elephant Apple": "sounds/Elephant_Apple.mp3",
    "Fig": "sounds/Fig.mp3",
    "Feijoa": "sounds/Feijoa.mp3",
    "Finger Lime": "sounds/Finger_Lime.mp3",
    "Fairchild Tangerine": "sounds/Fairchild_Tangerine.mp3",
    "Forest Strawberry": "sounds/Forest_Strawberry.mp3",
    "Flat Peach": "sounds/Flat_Peach.mp3",
    "Fukushu Kumquat": "sounds/Fukushu_Kumquat.mp3",
    "Grapes": "sounds/Grapes.mp3",
    "Guava": "sounds/Guava.mp3",
    "Gooseberry": "sounds/Gooseberry.mp3",
    "Gac": "sounds/Gac.mp3",
    "Golden Kiwi": "sounds/Golden_Kiwi.mp3",
    "Goumi": "sounds/Goumi.mp3",
    "Governor's Plum": "sounds/Governors_Plum.mp3",
    "Honeydew": "sounds/Honeydew.mp3",
    "Huckleberry": "sounds/Huckleberry.mp3",
    "Horned Melon": "sounds/Horned_Melon.mp3",
    "Hackberry": "sounds/Hackberry.mp3",
    "Huito": "sounds/Huito.mp3",
    "Hog Plum": "sounds/Hog_Plum.mp3",
    "Hawthorn": "sounds/Hawthorn.mp3",
    "Indian Fig": "sounds/Indian_Fig.mp3",
    "Indian Gooseberry": "sounds/Indian_Gooseberry.mp3",
    "Ice Apple": "sounds/Ice_Apple.mp3",
    "Jackfruit": "sounds/Jackfruit.mp3",
    "Jujube": "sounds/Jujube.mp3",
    "Java Plum": "sounds/Java_Plum.mp3",
    "Kiwi": "sounds/Kiwi.mp3",
    "Kumquat": "sounds/Kumquat.mp3",
    "Kei Apple": "sounds/Kei_Apple.mp3",
    "Lemon": "sounds/Lemon.mp3",
    "Lime": "sounds/Lime.mp3",
    "Lychee": "sounds/Lychee.mp3",
    "Mango": "sounds/Mango.mp3",
    "Melon": "sounds/Melon.mp3",
    "Mulberry": "sounds/Mulberry.mp3",
    "Nectarine": "sounds/Nectarine.mp3",
    "Nance": "sounds/Nance.mp3",
    "Nutmeg": "sounds/Nutmeg.mp3",
    "Orange": "sounds/Orange.mp3",
    "Olive": "sounds/Olive.mp3",
    "Oregon Grape": "sounds/Oregon_Grape.mp3",
    "Pineapple": "sounds/Pineapple.mp3",
    "Papaya": "sounds/Papaya.mp3",
    "Peach": "sounds/Peach.mp3",
    "Quince": "sounds/Quince.mp3",
    "Queen Apple": "sounds/Queen_Apple.mp3",
    "Quandong": "sounds/Quandong.mp3",
    "Raspberry": "sounds/Raspberry.mp3",
    "Redcurrant": "sounds/Redcurrant.mp3",
    "Rambutan": "sounds/Rambutan.mp3",
    "Starfruit": "sounds/Starfruit.mp3",
    "Strawberry": "sounds/Strawberry.mp3",
    "Sapodilla": "sounds/Sapodilla.mp3",
    "Tangerine": "sounds/Tangerine.mp3",
    "Tomato": "sounds/Tomato.mp3",
    "Tamarind": "sounds/Tamarind.mp3",
    "Ugli Fruit": "sounds/Ugli_Fruit.mp3",
    "Ububese": "sounds/Ububese.mp3",
    "Uvaia": "sounds/Uvaia.mp3",
    "Vanilla": "sounds/Vanilla.mp3",
    "Velvet Apple": "sounds/Velvet_Apple.mp3",
    "Voavanga": "sounds/Voavanga.mp3",
    "Watermelon": "sounds/Watermelon.mp3",
    "Wolfberry": "sounds/Wolfberry.mp3",
    "White Mulberry": "sounds/White_Mulberry.mp3",
    "Xigua": "sounds/Xigua.mp3",
    "Ximenia": "sounds/Ximenia.mp3",
    "Xango": "sounds/Xango.mp3",
    "Yellow Passionfruit": "sounds/Yellow_Passionfruit.mp3",
    "Yangmei": "sounds/Yangmei.mp3",
    "Yunnan Hackberry": "sounds/Yunnan_Hackberry.mp3",
    "Zucchini": "sounds/Zucchini.mp3",
    "Ziziphus": "sounds/Ziziphus.mp3",
    "Zinfandel Grape": "sounds/Zinfandel_Grape.mp3",
    "Not fruit found": "sounds/Not_fruits_found"
};

function displayKey(a) {
    let filterFruits = fruits.filter(fruit => fruit[0] === a);

    if (filterFruits.length > 0) {
        let randomFruits = Math.floor(Math.random() * filterFruits.length)
        let resultFruits = filterFruits[randomFruits]

        document.getElementById("output").innerHTML = resultFruits

        if (sounds[resultFruits]) {
            let audio = new Audio(sounds[resultFruits])
            audio.play()
        }
    } else {
        document.getElementById("output").innerHTML = "Not fruits found"
    }
}









