export const calculatorLevel = (xp) => {
    const objectLevel = {
        level: 0,
        xpCurrent: 0,
        xpNextLevel: 0,
        percentXp: 0
    }
    objectLevel.level = Math.floor(Math.sqrt(xp) / 12 + 1);
    objectLevel.xpCurrent = xp;
    objectLevel.xpNextLevel = Math.pow((objectLevel.level) * 12, 2);
    objectLevel.percentXp = objectLevel.xpCurrent * 100 / objectLevel.xpNextLevel;
    return objectLevel;
}

export const calculatorStat = (stats) => {
    const objectStat = {
        hp: 0,
        atk: 0,
        def: 0,
        satk: 0,
        sdef: 0,
        spd: 0
    }
    objectStat.hp = Math.floor(0.01 * (2 * stats.hp + stats.statsIVHp) * stats.level) + stats.level + 10;
    objectStat.atk = Math.floor(0.01 * (2 * stats.atk + stats.statsIVAtk) * stats.level) + 5;
    objectStat.def = Math.floor(0.01 * (2 * stats.def + stats.statsIVDef) * stats.level) + 5;
    objectStat.satk = Math.floor(0.01 * (2 * stats.satk + stats.statsIVSAtk) * stats.level) + 5;
    objectStat.sdef = Math.floor(0.01 * (2 * stats.sdef + stats.statsIVSDef) * stats.level) + 5;
    objectStat.spd = Math.floor(0.01 * (2 * stats.spd + stats.statsIVSpd) * stats.level) + 5;
    return objectStat;
}