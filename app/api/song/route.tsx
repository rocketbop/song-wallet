import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/utils/prisma'

export async function POST(req: NextRequest) {
  const body = await req.json()

  await prisma.song.create({
    data: {
      title: body.title,
      text: '',
    },
  })

  return NextResponse.json({ status: 201 })
}
