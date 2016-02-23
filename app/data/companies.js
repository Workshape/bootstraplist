const IDS = [ 'dr-ed' ];

function exportAll() {
    var out = {};

    IDS.map((id) => {
        out[id] = require(`./${id}/meta.json`);
        out[id].description = require(`./${id}/description.md`);
        out[id].id = id;
    });

    return out;
}

export default exportAll();