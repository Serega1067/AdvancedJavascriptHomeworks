let albums = [
    {
        title: "Название1",
        artist: "Имя1",
        year: "1990",
    },
    {
        title: "Название2",
        artist: "Имя2",
        year: "1991",
    },
    {
        title: "Название3",
        artist: "Имя3",
        year: "1992",
    }
];

let musicCollection = {
    from: 0,
    to: albums.length,
    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },
    next() {
        return this.current < this.to ? {
            done: false,
            value: albums[this.current++]
        } : { done: true };
    }
}

console.log(musicCollection);

for (let album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}

let musicCollection2 = {
    from: 0,
    to: albums.length
};

/*
Второй способ
*/
musicCollection2[Symbol.iterator] = function () {
    return {
        current: this.from,
        last: this.to,
        next() {
            return this.current < this.last ? {
                done: false,
                value: albums[this.current++]
            } : { done: true };
        }
    };
};

for (let album of musicCollection2) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}