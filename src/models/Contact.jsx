export default function Contact({ nom, prenom, email, telephone,  }) {
  return (
    <>
      <div className="contact">
        <h2>
          Nom : {nom} <br />
          Prénom : {prenom}
        </h2>
        
          Email : {email} <br />
          Téléphone : {telephone}
       
  
      </div>
    </>
  );
}
