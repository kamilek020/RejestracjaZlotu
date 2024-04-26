import React, { useState } from 'react';
import { db } from './index';
import { collection, addDoc } from 'firebase/firestore';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    vehicle: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Dodajemy dane do kolekcji "formularze" w Firestore
      await addDoc(collection(db, "formularze"), formData);
      alert("Dane zostały wysłane pomyślnie!");
      // Resetujemy formularz
      setFormData({
        name: '',
        vehicle: '',
        description: ''
      });
    } catch (error) {
      console.error("Błąd podczas wysyłania danych:", error);
      alert("Wystąpił błąd podczas wysyłania danych. Spróbuj ponownie.");
    }
  };

  return (
    <div className="App">
      <h1>Formularz</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Imię:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Pojazd:
          <input type="text" name="vehicle" value={formData.vehicle} onChange={handleChange} />
        </label>
        <br />
        <label>
          Opis:
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Weryfikuj</button>
      </form>
    </div>
  );
}

export default App;