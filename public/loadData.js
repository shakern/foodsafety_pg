function loadData() {
    console.log("fetch");
    // confirm code is running on click
    fetch('/api')
        .then(res => res.json())
        .then(res => {
            console.log(res);
            return res;
        })
        .then(res => {
            for (i = 0; i < res.data.length; i++) {
                let obj = res.data[i];
                try {
                    L.geoJSON(obj).addTo(mymap);
                    console.log(obj.coordinates);
                }
                catch {
                    console.log("This did not work");
                    continue;
                }

            }
            return res;
        });
}