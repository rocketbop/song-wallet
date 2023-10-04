import React from 'react'
import prisma from '@/utils/prisma'
import Window from '@/components/Window'

export default async function Home() {
  const songs = await prisma.song.findMany()
  return <Window songs={songs} />
}
