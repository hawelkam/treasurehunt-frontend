
export async function _getBoardState (playerName) {
    let response = await fetch("http://localhost:8080/api/v1/board/" + playerName)
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        let res = await response.json()
        return res;
    }
  }
  
  export async function _checkCells (playerName, cells) {
    const req = {
        playerName,
        cells: cells.map(cell => parseInt(cell))
    }
    let response = await fetch("http://localhost:8080/api/v1/check/", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req)
    })
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        let res = await response.json()
        return res;
    }
  }

  export async function _getLeaderboard () {
    let response = await fetch("http://localhost:8080/api/v1/leaderboard")
    if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        let res = await response.json()
        return res;
    }
  }