import { cn } from "@/app/utils/cn";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundGradient = ({
    children,
    className,
    containerClassName,
    animate = true,
}: {
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
    animate?: boolean;
}) => {
    const variants = {
        initial: {
            backgroundPosition: "0 50%",
        },
        animate: {
            backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
        },
    };
    return (
        <div className={cn("relative p-[4px] group", containerClassName)}>
            <motion.div
                variants={animate ? variants : undefined}
                initial={animate ? "initial" : undefined}
                animate={animate ? "animate" : undefined}
                transition={
                    animate
                        ? {
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }
                        : undefined
                }
                style={{
                    backgroundSize: animate ? "400% 400%" : undefined,
                }}
                className={cn(
                    "absolute inset-0 rounded-lg z-[1] opacity-50 group-hover:opacity-100 blur-md  transition duration-500 will-change-transform",
                    "bg-[radial-gradient(circle_farthest-side_at_0_100%,#a0aec0,transparent),radial-gradient(circle_farthest-side_at_100%_0,#000,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#000,transparent),radial-gradient(circle_farthest-side_at_0_0,#a0aec0,#a0aec0)]"
                )}
            />
            <motion.div
                variants={animate ? variants : undefined}
                initial={animate ? "initial" : undefined}
                animate={animate ? "animate" : undefined}
                transition={
                    animate
                        ? {
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }
                        : undefined
                }
                style={{
                    backgroundSize: animate ? "400% 400%" : undefined,
                }}
                className={cn(
                    "absolute inset-0 rounded-lg z-[1] will-change-transform",
                    "bg-[radial-gradient(circle_farthest-side_at_0_100%,#a0aec0,transparent),radial-gradient(circle_farthest-side_at_100%_0,#000,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#a0aec0,transparent),radial-gradient(circle_farthest-side_at_0_0,#a0aec0,#a0aec0)]"
                )}
            />

            <div className={cn("relative z-10", className)}>{children}</div>
        </div>
    );
};
