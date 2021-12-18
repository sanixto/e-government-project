class Content {
    onClickCharter(event) {
        const target = event.target.closest('h2');
    
        if (!target) return;

        target.scrollIntoView(top);
    }  
}

export default new Content;
