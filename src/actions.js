import store from './store';
/*
export async function search () {
    const url = "data/planets/Kepler-22b.json"
    fetch(url)
        .then(res => res.json())
        .then(res => {
            let newItem= [];
            newItem = [...store.getState().items];
            newItem.push(res)

            store.setState({
                items : newItem
            });
        })
        
}
*/
export async function search(){
    const res = await fetch('data/earth-like-results.json');
    const result = await res.json();
    const list = await getPlanets(result.results);
    console.log(list)
    store.setState({
        items : list
    });
}

function getPlanets(list){
    return Promise.all(list.map(item=>fetch(item).then(res=>res.json())))
}

