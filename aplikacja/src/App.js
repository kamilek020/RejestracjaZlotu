import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Konfiguracja Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC_MXSQOdBGNm1pnTvaI7igG3fi63JgYnk",
};

// Inicjalizacja Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  const [name, setName] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Imię:', name);
    console.log('Pojazd:', vehicle);
    console.log('Opis:', description);

    // Sprawdź, czy wszystkie pola są wypełnione
    if (!name || !vehicle || !description) {
      alert('Wypełnij wszystkie pola formularza.');
      return;
    }

    // Zapisz dane w bazie danych Firebase
    try {
      await addDoc(collection(db, 'formEntries'), {
        name,
        vehicle,
        description,
      });
      alert('Dane zostały wysłane i zapisane pomyślnie!');
      setName('');
      setVehicle('');
      setDescription('');
    } catch (error) {
      console.error('Błąd podczas zapisywania danych:', error);
      alert('Wystąpił błąd podczas zapisywania danych. Spróbuj ponownie później.');
    }
  };

  return (
    <div>
      <h1>Formularz</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Imię:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Pojazd:
            <input
              type="text"
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Opis:
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Zweryfikuj</button>
      </form>
    </div>
  );
}

export default App;