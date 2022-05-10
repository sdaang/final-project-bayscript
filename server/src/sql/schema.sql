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
'Gb3 Gb3 Db4 Bb3 Bb3 Bb3 
 Ab3 Gb3 Gb3 B3 B3 Bb3 BB3 Ab3 Ab3 Gb3 Gb3 Gb3 
 Db4 Bb3 Bb3 Bb3 Ab3 Gb3 Gb3 Eb3 Eb3 Db3 Db3 Db3 G20 G20 Gb3 Gb3
 Db4 Bb3 Bb3 Ab3 Ab3 Gb3 Gb3 B3 B3 Bb3 Bb3 Ab3 Ab3 Gb3 Gb3 Db4 
 Db4 Bb3 Bb3 Ab3 Ab3 Gb3 Gb3 Ab3 Ab3 Eb3 Eb3
');

INSERT INTO songs (id, song_title, artist, album, notes)
VALUES(5, 'Megalovania', 'Toby Fox', 'Undertale Soundtrack', '
D4 D4 D5 G20 A4 G20 G20 Ab4 G20 G4 G20 F4 F4 D4 F4 G4
C4 C4 C4 D5 G20 A4 G20 G20 Ab4 G20 G4 G20 F4 F4 D4 F4 G4
B3 B3 B3 D5 G20 A4 G20 G20 Ab4 G20 G4 G20 F4 F4 D4 F4 G4
Bb3 Bb3 Bb3 D5 G20 A4 G20 G20 Ab4 G20 G4 G20 F4 F4 D4 F4 G4
');

INSERT INTO songs (id, song_title, artist, album, notes)
VALUES(6, 'The Next Episode', 'Dr. Dre feat. Snoop Dogg', '2001', '
C3 G20 G3 G20 G3 F3 G3 G20 F3 Eb3 F3 G20 F3 Eb3 C3 Eb3 
C3 G20 G3 G20 G3 F3 G3 G20 F3 Eb3 F3 G20 F3 Eb3 C3 Eb3 C3
');

INSERT INTO songs (id, song_title, artist, album, notes)
VALUES(7, 'Mii Channel Theme', 'Kazumi Totaka', 'None', '
Gb3 G20 A3 Db4 G20 A3 G20 Gb3 D3 D3 D3 G20 G20 G20 G20 Db3
D3 Gb3 A3 Db4 G20 A3 G20 Gb3 E4 E4 E4 Eb4 D4 G20 G20 G20 
Ab3 G20 Db4 Gb3 G20 Db4 G20 Ab3 G20 Db4 G20 G3 Gb3 G20 E3 G20 
C3 C3 C3 G20 G20 G20 C3 C3 C3 G20 G20 
');
