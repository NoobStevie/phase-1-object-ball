const game = gameObject()

const homePlayers = game.homePlayers

const awayPlayers = game.awayPlayers

const allPlayers = players()

function teamColors(input){
    const colors=[]
    if (input === homeTeamName()){
        colors.push(game.home.colors)
    }
    return colors
}

function teamScore(team){
    let score = 0
    for(const player in team){
        score +=(team[player].points)
    }
    return score
}

function winningTeam(){

    let homeTeamPoints= teamScore(homePlayers)

    let awayTeamPoints= teamScore(awayPlayers)

    let winningTeam;

    if(homeTeamPoints>awayTeamPoints) {
        winningTeam= game.homeTeamName
    }
    else {
        winningTeam= game.awayTeamName
    }
    return winningTeam
}