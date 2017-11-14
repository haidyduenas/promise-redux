import store from './store';

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