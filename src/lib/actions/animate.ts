import { animate, inView } from 'motion';

type Direction = 'up' | 'down' | 'left' | 'right';

interface RevealOptions {
	direction?: Direction;
	delay?: number;
	duration?: number;
	distance?: number;
}


function fromTransform(direction: Direction, distance: number) {
	const map: Record<Direction, string> = {
		up:    `translateY(${distance}px)`,
		down:  `translateY(-${distance}px)`,
		left:  `translateX(${distance}px)`,
		right: `translateX(-${distance}px)`,
	};
	return map[direction];
}

const defaultDistance: Record<Direction, number> = { up: 24, down: 24, left: 100, right: 100 };

export function reveal(node: HTMLElement, options: RevealOptions = {}) {
	const { direction = 'up', delay = 0, duration = 0.7 } = options;
	const distance = options.distance ?? defaultDistance[direction];

	node.style.opacity = '0';

	const stop = inView(node, () => {
		animate(node, { opacity: [0, 1], transform: [fromTransform(direction, distance), 'none'] } as any, {
			delay,
			duration,
			ease: [0.25, 0.46, 0.45, 0.94],
		});
	}, { margin: '0px 0px -24% 0px' });

	return { destroy: stop };
}
