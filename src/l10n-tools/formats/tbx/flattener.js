

export default class TBXFlattener {

    flatten (obj) {
        const data = []
        obj.martif.text.map(text => {
            text.body.map(body => {
                body.termEntry.map(termEntry => {
                    let entry = {}
                    if (termEntry.langSet[0].descripGrp) {
                        entry.description = termEntry.langSet[0].descripGrp[0].descrip[0]._;
                    }
                    entry.term = termEntry.langSet[0].ntig[0].termGrp[0].term[0]._;
                    entry.translation = termEntry.langSet[1].ntig[0].termGrp[0].term[0]._;
                    data.push(entry)
                });
            });
        });
        return data;
    }
}
