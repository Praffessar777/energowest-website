import { motion } from "motion/react";

export function EnergyFlowAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-40" style={{ perspective: '1000px' }}>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1920 1200">
        <defs>
          {/* Gradient for energy flow */}
          <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4A90E2" stopOpacity="0" />
            <stop offset="50%" stopColor="#4A90E2" stopOpacity="1" />
            <stop offset="100%" stopColor="#4A90E2" stopOpacity="0" />
          </linearGradient>
          
          <linearGradient id="energyGradientStrong" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4A90E2" stopOpacity="0" />
            <stop offset="30%" stopColor="#7DB4EA" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#4A90E2" stopOpacity="1" />
            <stop offset="70%" stopColor="#7DB4EA" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#4A90E2" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="energyGradientVertical" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4A90E2" stopOpacity="0" />
            <stop offset="50%" stopColor="#4A90E2" stopOpacity="1" />
            <stop offset="100%" stopColor="#4A90E2" stopOpacity="0" />
          </linearGradient>
          
          {/* Enhanced glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <filter id="strongGlow">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <filter id="ultraGlow">
            <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Основні горизонтальні потоки з 3D ефектами */}
        <motion.g
          initial={{ rotateX: 0, rotateY: 0 }}
          animate={{ 
            rotateX: [0, 5, -5, 0],
            rotateY: [0, 3, -3, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ transformOrigin: "center center" }}
        >
          <motion.path
            d="M-200,180 Q400,130 800,180 T2200,180"
            stroke="url(#energyGradientStrong)"
            strokeWidth="3.5"
            fill="none"
            filter="url(#strongGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0
            }}
          />
          
          <motion.path
            d="M-200,220 Q500,170 900,220 T2300,220"
            stroke="url(#energyGradient)"
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.7, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3
            }}
          />
        </motion.g>

        <motion.g
          initial={{ rotateX: 0, rotateY: 0 }}
          animate={{ 
            rotateX: [0, -4, 4, 0],
            rotateY: [0, -2, 2, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          style={{ transformOrigin: "center center" }}
        >
          <motion.path
            d="M-200,380 Q600,330 1000,380 T2400,380"
            stroke="url(#energyGradientStrong)"
            strokeWidth="3"
            fill="none"
            filter="url(#strongGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.9, 0]
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />

          <motion.path
            d="M-200,420 Q700,370 1100,420 T2500,420"
            stroke="url(#energyGradient)"
            strokeWidth="1.8"
            fill="none"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          />
        </motion.g>

        <motion.g
          initial={{ rotateX: 0, rotateY: 0 }}
          animate={{ 
            rotateX: [0, 3, -3, 0],
            rotateY: [0, 4, -4, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          style={{ transformOrigin: "center center" }}
        >
          <motion.path
            d="M-200,580 Q500,530 900,580 T2300,580"
            stroke="url(#energyGradientStrong)"
            strokeWidth="2.8"
            fill="none"
            filter="url(#strongGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.85, 0]
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />

          <motion.path
            d="M-200,620 Q450,570 850,620 T2250,620"
            stroke="url(#energyGradient)"
            strokeWidth="1.5"
            fill="none"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.8
            }}
          />
        </motion.g>

        {/* Додаткові горизонтальні лінії */}
        <motion.path
          d="M-200,280 Q650,250 1050,280 T2350,280"
          stroke="url(#energyGradient)"
          strokeWidth="1.3"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.4, 0]
          }}
          transition={{
            duration: 4.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8
          }}
        />

        <motion.path
          d="M-200,480 Q550,450 950,480 T2250,480"
          stroke="url(#energyGradient)"
          strokeWidth="1.1"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.35, 0]
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3.2
          }}
        />

        {/* Нові горизонтальні лінії для заповнення простору */}
        <motion.path
          d="M-200,720 Q600,680 1000,720 T2400,720"
          stroke="url(#energyGradient)"
          strokeWidth="1.6"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.45, 0]
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4.1
          }}
        />

        <motion.path
          d="M-200,820 Q700,780 1100,820 T2500,820"
          stroke="url(#energyGradientStrong)"
          strokeWidth="2.2"
          fill="none"
          filter="url(#strongGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 3.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5.2
          }}
        />

        <motion.path
          d="M-200,920 Q500,880 900,920 T2300,920"
          stroke="url(#energyGradient)"
          strokeWidth="1.4"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 5.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6.1
          }}
        />

        <motion.path
          d="M-200,1020 Q650,980 1050,1020 T2400,1020"
          stroke="url(#energyGradient)"
          strokeWidth="1.2"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.25, 0]
          }}
          transition={{
            duration: 6.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 7.3
          }}
        />

        {/* Вертикальні лінії з 3D ефектами */}
        <motion.g
          initial={{ rotateY: 0, rotateX: 0 }}
          animate={{ 
            rotateY: [0, -6, 6, 0],
            rotateX: [0, 2, -2, 0]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ transformOrigin: "center center" }}
        >
          <motion.line
            x1="150"
            y1="80"
            x2="150"
            y2="1120"
            stroke="url(#energyGradientVertical)"
            strokeWidth="2"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0
            }}
          />

          <motion.line
            x1="300"
            y1="100"
            x2="300"
            y2="1100"
            stroke="url(#energyGradientVertical)"
            strokeWidth="2.5"
            filter="url(#strongGlow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3
            }}
          />

          <motion.line
            x1="450"
            y1="90"
            x2="450"
            y2="1110"
            stroke="url(#energyGradientVertical)"
            strokeWidth="1.8"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6
            }}
          />
        </motion.g>

        <motion.g
          initial={{ rotateY: 0, rotateX: 0 }}
          animate={{ 
            rotateY: [0, 5, -5, 0],
            rotateX: [0, -3, 3, 0]
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          style={{ transformOrigin: "center center" }}
        >
          <motion.line
            x1="600"
            y1="80"
            x2="600"
            y2="1120"
            stroke="url(#energyGradientVertical)"
            strokeWidth="2.2"
            filter="url(#strongGlow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.9
            }}
          />

          <motion.line
            x1="750"
            y1="100"
            x2="750"
            y2="1100"
            stroke="url(#energyGradientVertical)"
            strokeWidth="1.5"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 3.1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2
            }}
          />

          <motion.line
            x1="900"
            y1="90"
            x2="900"
            y2="1110"
            stroke="url(#energyGradientVertical)"
            strokeWidth="2.4"
            filter="url(#strongGlow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          />
        </motion.g>

        <motion.g
          initial={{ rotateY: 0, rotateX: 0 }}
          animate={{ 
            rotateY: [0, -4, 4, 0],
            rotateX: [0, 4, -4, 0]
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
          style={{ transformOrigin: "center center" }}
        >
          <motion.line
            x1="1050"
            y1="80"
            x2="1050"
            y2="1120"
            stroke="url(#energyGradientVertical)"
            strokeWidth="1.9"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 2.9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.8
            }}
          />

          <motion.line
            x1="1200"
            y1="100"
            x2="1200"
            y2="1100"
            stroke="url(#energyGradientVertical)"
            strokeWidth="2.6"
            filter="url(#ultraGlow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 2.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.1
            }}
          />

          <motion.line
            x1="1350"
            y1="90"
            x2="1350"
            y2="1110"
            stroke="url(#energyGradientVertical)"
            strokeWidth="1.6"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 3.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.4
            }}
          />

          <motion.line
            x1="1500"
            y1="80"
            x2="1500"
            y2="1120"
            stroke="url(#energyGradientVertical)"
            strokeWidth="2.1"
            filter="url(#strongGlow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 2.7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.7
            }}
          />

          <motion.line
            x1="1650"
            y1="100"
            x2="1650"
            y2="1100"
            stroke="url(#energyGradientVertical)"
            strokeWidth="1.4"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 3.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />

          <motion.line
            x1="1800"
            y1="90"
            x2="1800"
            y2="1110"
            stroke="url(#energyGradientVertical)"
            strokeWidth="1.7"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3.3
            }}
          />
        </motion.g>

        {/* Діагональні лінії з 3D ефектом */}
        <motion.g
          initial={{ rotateZ: 0, rotateY: 0 }}
          animate={{ 
            rotateZ: [0, 2, -2, 0],
            rotateY: [0, 3, -3, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ transformOrigin: "center center" }}
        >
          <motion.line
            x1="50"
            y1="50"
            x2="1870"
            y2="1150"
            stroke="#4A90E2"
            strokeWidth="1"
            opacity="0.2"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          />

          <motion.line
            x1="1870"
            y1="50"
            x2="50"
            y2="1150"
            stroke="#4A90E2"
            strokeWidth="0.8"
            opacity="0.15"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5
            }}
          />
        </motion.g>
      </svg>
    </div>
  );
}