var config = {
    style: 'mapbox://styles/tianle7/cm7u1rsw0009v01r1451de4h3/draft',
    accessToken: 'pk.eyJ1IjoidGlhbmxlNyIsImEiOiJjbTZyYmtjYXQxbGlyMmtxOHEwdXF1OHkzIn0.umBNsGw_x7a6sqI1-AE2Ag',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Accessibility and Use of parks and Natural Reserves',
    subtitle: 'How do people and animals use parks and reserve areas together?',
    byline: 'By Tianle Luo',
    footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-container',
            alignment: 'left',
            hidden: false,
            title: 'Park and Natural Reserves in Singapore',
            description: ' Singapore is known as the Garden City, with numerous parks and nature reserves that blend modern urban and natural landscapes in harmony.<br><br> From Marina Bay Gardens to the precious plants of Singapore Botanic Gardens, to the rich ecology of MacLehose Reservoir and Bukit Timah Nature Reserve, these green spaces provide opportunities for people to relax, hike, and explore biodiversity, while also providing habitats for organisms. </a> <br><br><img src="images/legend1.png" style="height:100%;width:200px;"></img>',
            location: {
                center: [103.79304, 1.35969],
                zoom: 10.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'parksandnaturereserve',
                    opacity: 1
                },
                {
                    layer: 'mrtstationexit',
                    opacity: 0               
                },
                {
                    layer: '800buffer',
                    opacity: 0                
                },
                {
                    layer: 'parkfacilities',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'parksandnaturereserve',
                    opacity: 1
                },
                {
                    layer: 'mrtstationexit',
                    opacity: 0                
                },
                {
                    layer: '800buffer',
                    opacity: 0                
                },
                {
                    layer: 'parkfacilities',
                    opacity: 0
                }
            ]
        },
        {
            id: 'second-container',
            alignment: 'left',
            hidden: false,
            title: 'Park Facilities',
            description: 'Park facilities are rich and diverse, covering entertainment, leisure, and accessibility needs. Many parks have barbecue facilities, fitness corners, and picnic areas, providing convenience for families and friends to gather. <br><br> In addition, there are bicycle rental stations and parking spots available for cyclists to enjoy the green space. waterfront parks, forest trails and wetland conservation areas, all provides comprehensive facilities to meet the needs of different populations and enhance leisure experiences.<br><br><img src="images/legend2.png" style="height:100%; width:100px;"></img>',
            location: {
                center: [103.79304, 1.35969],
                zoom: 10.5,
                pitch: 0,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'parksandnaturereserve',
                    opacity: 1
                },
                {
                    layer: 'mrtstationexit',
                    opacity: 0                
                },
                {
                    layer: '800buffer',
                    opacity: 0                
                },
                {
                    layer: 'parkfacilities',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'parksandnaturereserve',
                    opacity: 1
                },
                {
                    layer: 'mrtstationexit',
                    opacity: 0                
                },
                {
                    layer: '800buffer',
                    opacity: 0                
                },
                {
                    layer: 'parkfacilities',
                    opacity: 1
                }
            ],
        },
        {
            id: 'third-container',
            alignment: 'right',
            hidden: false,
            title: 'Accessibility',
            description: ' The MRT system in Singapore has extensive coverage, providing convenient public transportation options to parks and nature reserves. Many major parks have nearby subway stations, making it easy for tourists to reach. <br><br> Citizens and tourists can also conveniently reach distant nature reserves such as Bukit Timah Nature Reserve and Sungai Buloh Wetland Reserve by subway, making green spaces more accessible.<br><br><img src="images/legend3.png" style="height:100%; width:100px;"></img>',
            location: {
                center: [103.79304, 1.35969],
                zoom: 10.5,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 10, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'parksandnaturereserve',
                    opacity: 1
                },
                {
                    layer: 'mrtstationexit',
                    opacity: 1                
                },
                {
                    layer: '800buffer',
                    opacity: 1                
                },
                {
                    layer: 'parkfacilities',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'parksandnaturereserve',
                    opacity: 1
                },
                {
                    layer: 'mrtstationexit',
                    opacity: 1                
                },
                {
                    layer: '800buffer',
                    opacity: 1                
                },
                {
                    layer: 'parkfacilities',
                    opacity: 0
                }
            ]
        },
        {
            id: 'forth-container',
            alignment: 'right',
            hidden: false,
            title: 'Bukit Timah Nature Reserve',
            image: 'images/example.jpg',
            description: 'Bukit Timah Nature Reserve is one of the oldest pristine tropical rainforest reserves in Singapore, with abundant wildlife. This is also a popular destination for nature enthusiasts and hikers.<br><br> Through strict management and increased environmental awareness, Bukit Timah Nature Reserve has successfully achieved a harmonious coexistence of wildlife conservation and tourist viewing and play.',
            location: {
                center: [103.80125, 1.38120],
                zoom: 11.8,
                pitch: 45,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 10, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'parksandnaturereserve',
                    opacity: 1
                },
                {
                    layer: 'mrtstationexit',
                    opacity: 0                
                },
                {
                    layer: '800buffer',
                    opacity: 0                
                },
                {
                    layer: 'parkfacilities',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'parksandnaturereserve',
                    opacity: 1
                },
                {
                    layer: 'mrtstationexit',
                    opacity: 0                
                },
                {
                    layer: '800buffer',
                    opacity: 0                
                },
                {
                    layer: 'parkfacilities',
                    opacity: 0
                }
            ]
        }
    ]
};