async function getUserCountry() {
    const username = document.getElementById("usernameGet").value;

    if (!username) {
        alert("Please enter a username");
        return;
    }
    
    const response = await fetch(`https://api.nationalize.io/?name=michael`);
    
  console.log(response.data);

    try {
        const data = await response.json();

        console.log(`Country: ${data.country}\n Capital: ${data.capital} || "N/A"}\n Internet code : ${data.internetcode}`);

    }

    catch {

        if (response.status === 404) {
            alert("Username not found.");
            return;
        }

    }
}
