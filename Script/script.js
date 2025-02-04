function filterSubjects() {
    const input = document.getElementById("searchInput").value.toUpperCase();
    const table = document.getElementById("subjectTable");
    const rows = table.getElementsByTagName("tr");
  
    for (let i = 1; i < rows.length; i++) {
      const cells = rows[i].getElementsByTagName("td");
      let match = false;
      for (let j = 0; j < cells.length; j++) {
        if (cells[j] && cells[j].innerText.toUpperCase().indexOf(input) > -1) {
          match = true;
          break;
        }
      }
      rows[i].style.display = match ? "" : "none";
    }
  }
  