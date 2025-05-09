const {MongoClient} = require('mongodb');
async function main(){
    const uri = "mongodb+srv://inbakumar17:12345@cluster0.zja84cu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const client = new MongoClient(uri);
    try{
        await client.connect();
        console.log(" Connection Happened here ")
        await findsomedata(client);
    } catch(e){
        console.error(e);
    } finally{
        await client.close();
        console.log(" We closed our connection")
    }
}
main().catch(console.error);


async function findsomedata(client ){
    const cursor = client.db("bookreviewapp").collection("stories").find({});
    const results = await cursor.toArray();
    //console.log(results);
    const js= (JSON.stringify(results));
    console.log(js);

};