CREATE TABLE user (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    COPS BOOLEAN DEFAULT 0,
    theQuantClub BOOLEAN DEFAULT 0,
    roboticsClub BOOLEAN DEFAULT 0,
    businessClub BOOLEAN DEFAULT 0,
    clubOfSustainabilityAndInnovation BOOLEAN DEFAULT 0,
    aeroModellingClub BOOLEAN DEFAULT 0,
    societyOfAutomotiveEngineers BOOLEAN DEFAULT 0,
    astronomyClub BOOLEAN DEFAULT 0
);
