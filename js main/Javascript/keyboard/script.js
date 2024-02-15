const insert = document.querySelector("insert");

window.addEventListener("keydown", function (e) {
  insert.innerHTML = `
    <div class="color">
    table>
    <tr>
      <th>Key</th>
      <th>Keycode</th>
      <th>code</th>
    </tr>
    <tr>
      <td>${e.key === " " ? "space" : params.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
    
      
  </table>
  </div>
    `;
});
