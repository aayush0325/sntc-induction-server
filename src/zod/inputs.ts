import zod from 'zod';

export const requestSchema = zod.object({
    firstName:zod.string(),
    lastName:zod.string(),

});

export const clubs = zod.union([
    zod.literal('COPS'),
    zod.literal('businessClub'),
    zod.literal('theQuantClub'),
    zod.literal('roboticsClub'),
    zod.literal('clubOfSustainabilityAndInnovation'),
    zod.literal('aeroModellingClub'),
    zod.literal('societyOfAutomotiveEngineers'),
    zod.literal('astronomyClub'),
])