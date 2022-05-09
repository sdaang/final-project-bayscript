CREATE TABLE songs (
	id int NOT NULL PRIMARY KEY,
	song_title text NOT NULL,
	artist text NOT NULL,
	album text NOT NULL,
	notes varchar NOT NULL
);


INSERT INTO songs (id, song_title, artist, album, notes) 
VALUES (1, 'Ode to Joy (Dubstep Remix)', 'Ludwig van Beethoven', 'Unknown Album','E4 E4 F4 G4 G4 F4 E4 D4 C4 C4 D4 E4 E4 D4 D4');

INSERT INTO songs (id, song_title, artist, album, notes) 
VALUES (2, 'Giornos Theme', 'Yugo Kanno', 'Vol.1: Overture','Gb4 Gb4 Gb4 
D4 D4 D4 D4 D4
D4 E4 
F4 F4 E4 E4 D4 
Db4 Db4 D4 D4 E4
Gb4 Gb4 Gb4 Gb4
B4 B4 B4 B4
B3 Db4 
D4 D4 E4 E4 D4 
Db Db A4 A4 G4');

INSERT INTO songs (id, song_title, artist, album, notes) 
VALUES(3, 'Careless Whisper', 'George Michael', 'Make It Big','
E3 E4 E4 D4 A3 A3 F3 F3 E4 E4 E4 D4 A3 A3 F3 F3 F3
C4 C4 C4 Bb3 F3 F3 D3 D3 C4 C4 C4 Bb3 F3 F3 D3 D3 D3
Bb3 Bb3 Bb3 A3 F3 F3 D3 D3 Bb2 Bb2 Bb2 Bb2 Bb2 Bb2 C3 C3
A2 A2 A2 Bb2 Bb2 C3 C3 D3 D3 E3 E3 F3 F3 G3 G3 A3 A3
');


INSERT INTO songs (id, song_title, artist, album, notes)
VALUES(4, 'All Star', 'Smash Mouth', 'Astro Lounge', 
'Gb3 Gb3 Bb3 
');
