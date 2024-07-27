import zod from 'zod'

export const clubs = zod.union([
    zod.literal('COPS'),
    zod.literal('bizClub'),
    zod.literal('theQuantClub'),
    zod.literal('robotics'),
    zod.literal('csi'),
    zod.literal('AMC'),
    zod.literal('SAE'),
    zod.literal('astroClub'),
])