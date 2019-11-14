function loadData() {
    fetch('/api')
      .then(res => res.json())
      .then(res => {
        //console.log(res);
        var pos = res.data.map(el => el.geocoded_column_1);
        //remove null coordinate values; there are a lot
        pos = pos.filter(el => el != null);
        console.log(pos);
        for (let i = 0; i < pos.length; i +=1 ) {

          console.log(pos[i].coordinates);   //log each coordinate as marker is added, will remove
          L.marker(pos[i].coordinates).addTo(map);
        }
      });
      //.then(codes => document.querySelector(".content").innerHTML = codes);
  }