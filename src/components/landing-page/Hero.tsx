import { ProjectCard } from '../commons/ProjectCard'
import { TotalVisits } from '../commons/TotalVisits'
import { UserCard } from '../commons/UserCard'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'

export const Hero = () => {
	return (
		<div className='flex h-screen'>
			<div className='mt-[30vh] flex w-full flex-col gap-2'>
				<h1 className='text-5xl leading-[64px] font-bold text-white'>
					Seus projetos e redes sociais em um único link
				</h1>
				<h2 className='text-xl leading-6'>
					Crie sua própria página de projetos e compartilhe eles com o mundo.
					<br />
					Acompanhe o engajamento com Analytics de cliques
				</h2>

				<div className='mt-[10vh] flex w-full items-center gap-2'>
					<span className='text-xl text-white'>projectinbio.com/</span>
					<Input />
					<Button>Criar agora</Button>
				</div>
			</div>

			<div className='flex w-full items-center justify-center bg-[radial-gradient(circle_at_50%_50%,#4B2DBB,transparent_45%)]'>
				<div className='relative'>
					<UserCard />

					<div className='absolute -right-[45%] -bottom-[7%]'>
						<TotalVisits />
					</div>

					<div className='absolute top-[20%] -left-[45%] -z-10'>
						<ProjectCard
							clickable={false}
							project={{
								id: '1',
								title: 'Meu projeto incrível',
								description: 'Descrição super detalhada do que o projeto faz',
								image: '/project1.jpg',
								url: '',
								totalVisits: 10,
								profileId: 'profile123',
							}}
						/>
					</div>
					<div className='absolute -top-[5%] -left-[55%] -z-10'>
						<ProjectCard
							clickable={false}
							project={{
								id: '2',
								title: 'Meu portfolio',
								description:
									'Descrição do meu portfolio com todos os meus trabalhos',
								image: '/project2.jpg',
								url: '',
								totalVisits: 10,
								profileId: 'profile123',
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
