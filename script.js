//Define default map numbers
let latlng = [26, 30];
let zoom = 7;

//Define some terms to be used later
let marker;
let title;
let image;
let description;

//Set Map
let map = L.map('map').setView(latlng,zoom);

//Use Open Street Map layer
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);


//Define function for opening popUp
    function onClick(e) {
        let popup = e.target.getPopup();
        let content = popup.getContent();
    }

//Define popUp markup to ensure all are styled the same
    function popUp(marker) {
        marker.bindPopup(`
        <img src="${image}" class="map-image">
        <b class="map-title">${title}</b>
        <p class="map-content">${description}</p>`);
    }


    //Pyramids Of Giza 
        $('#pyramids').on('click', () => {
            latlng = [29.979235, 31.134201];
            zoom = 17;
            map.panTo(latlng)
            map.setZoom(zoom)
            image = `images/pyramids.png`
            title = `Pyramids Of Giza`;
            description = 'The three pyramids, which house the tombs of ancient pharaohs, are one of the Seven Wonders of the ancient world and one of the most famous Egypt attractions. Located on the Giza Plateau, the pyramids are the only Wonder to have remained intact over thousands of years. The Great Pyramid, also known as the Pyramid of Khufu, is 138 meters high and is open to tourists via the Robber\'s Tunnel. The limestone Sphinx structure is also part of the same complex. The pyramids complex of Giza is the jewel of Egypt tourist attractions and one of the most popular Egypt sightseeing places.'
            marker = L.marker(latlng).addTo(map);
            popUp()
            marker.on('click', onClick)
        })

    //Valley of Kings
        $('#kingsvalley').on('click', () => {
            latlng = [25.740173964243215, 32.601410999996894];
            zoom = 17;
            map.panTo(latlng)
            map.setZoom(zoom)
            image = `images/valley.png`
            title = `Valley of Kings`;
            description = 'Located on the East bank of river Nile, Luxor was the site of the ancient city of Thebes and is one of the most popular Egypt tourist spots. Hailed as the world\'s largest open-air museum, Luxor is best known for the Valley of Kings that houses rock-cut tombs of ancient pharaohs. Famous ancient kings such as Tutankhamun and Amenhotep were buried here. Although there are about 63 tombs that have been excavated, only a small number is open to tourists. Tutankhamun\'s tomb, called the KV62, has a separate entry charge. One of the most haunting places to see in Egypt for sure! This is amongst the famous places in Egypt.'
            marker = L.marker(latlng).addTo(map);
            popUp()
            marker.on('click', onClick)
        })

    //Citadel of Saladin
        $('#citadel').on('click', () => {
            latlng = [30.028743352743543, 31.259718420228094];
            zoom = 17;
            map.panTo(latlng)
            map.setZoom(zoom)
            image = `images/citadel.png`
            title = `Citadel of Saladin`;
            description = 'One of the many places in ancient Egypt to be declared UNESCO World Heritage Sites, the citadel was built by the famous Ayyubid ruler Saladin to protect the Cairo and Fustat (the first Egyptian capital under the Caliphate) against Crusaders. The huge fortification is lined by several watchtowers and houses several stunning mosques and the Well of Joseph inside. The Al-Naseer, Sulayman Pasha and the Al Gawhara Palace museum are three places that are a must for Egypt sightseeing tours in Cairo.'
            marker = L.marker(latlng).addTo(map);
            popUp()
            marker.on('click', onClick)
        })

    //Rock Temples of Abu Simbel
        $('#abusimbel').on('click', () => {
            latlng = [22.337250486738185, 31.625797655609304];
            zoom = 17;
            map.panTo(latlng)
            map.setZoom(zoom)
            image = `images/abusimbel.png`
            title = `Rock Temples of Abu Simbel`;
            description = 'Rock Temple of Abu Simbel located along the Western banks of the Lake Nasser, the twin temples of Ramesses II and his queen Nefertari were carved right into the mountains and are one of the most popular Egypt places to visit. The rock impressions of the king and the queen sitting on their thrones and overlooking the vastness of the Egyptian mountains is an iconic image of ancient Egypt. The temple was relocated because of the rising waters of the lake in the 60s and receives hundreds of visitors every day.'
            marker = L.marker(latlng).addTo(map);
            popUp()
            marker.on('click', onClick)
        })

    //Egyptian Museum
        $('#egmuseum').on('click', () => {
            latlng = [30.04833649821122, 31.233669806945183];
            zoom = 17;
            map.panTo(latlng)
            map.setZoom(zoom)
            image = `images/museum.png`
            title = `Egyptian Museum`;
            description = 'The ancient cities of Egypt have been excavated to reveal temples, palaces, and tombs that are thousands of years old, and you may wonder where all the fabled treasure went. After all, the Egyptians were famous for burying their dead with all kinds of things  gold, golden artifacts, books, and so on. Worry not, because the Egyptian Museum is that dream come true. The pyramids tell you only half the story, the other half is housed in this biggest Egypt collection in the world, including the famous excavation from the tomb of Tutankhamun, making it one of the most spectacular Egypt places to visit.'
            marker = L.marker(latlng).addTo(map);
            popUp()
            marker.on('click', onClick)
        })

    //White Desert
        $('#whitedesert').on('click', () => {
            latlng = [27.283106705703485, 28.200960181495024];
            zoom = 17;
            map.panTo(latlng)
            map.setZoom(zoom)
            image = `images/whitedesert.png`
            title = `White Desert`;
            description = 'It is hard to believe that this surreal Egypt attraction of the Sahara Desert is natural. Enormous formations of chalk ranging from snow white to cream in color abound in the region, which also features the sand dunes of the Great Sand Sea and the cliffs of the Farafra Depression. The white boulders and pinnacles have been shaped by wind erosion for several millennia. The surrounding national park also houses the Rhim and Dorcas gazelle, the last of which roam the arid landscape here. With endless splendor, it is among the most beautiful places to visit in Egypt'
            marker = L.marker(latlng).addTo(map);
            popUp()
            marker.on('click', onClick)
        })

    //Karnak Temple
        $('#karnak').on('click', () => {
            latlng = [25.71900766899634, 32.65770762137778];
            zoom = 17;
            map.panTo(latlng)
            map.setZoom(zoom)
            image = `images/karnak.png`
            title = `Karnak Temple`;
            description = 'The Karnak Temple in Luxor is one of the most famous places to visit in Egypt. The temple complex is the most astonishing tourist spot and includes the Karnark Open Air Museum. The temple houses three other famous temples within its premises – the Temple of Khons, the Great Temple of Amun and the Festival Temple of Tuthmosis III. Since the complex is a vast open site, it is advisable to spend a minimum of 2-3 hours to explore the entire complex. Among the best places in Egypt, this should definitely be on your list for your next trip.'
            marker = L.marker(latlng).addTo(map);
            popUp()
            marker.on('click', onClick)
        })

//Reset view to DFW whole with all marker showing
    $('#resetBtn').on('click', () => {
        latlng = [26, 30];
        zoom = 7;
        map.panTo(latlng)
        map.setZoom(zoom)
    })