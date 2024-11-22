import matplotlib.pyplot as plt
import matplotlib.animation as animation

def bubble_sort_visual(my_array):
    steps = []  # Tämä tallentaa välivaiheet
    
    n = len(my_array)
    for i in range(n-1):
        for j in range(n-i-1):
            if my_array[j] > my_array[j+1]:
                my_array[j], my_array[j+1] = my_array[j+1], my_array[j]
            # Tallennetaan jokainen vaihe
            steps.append(my_array[:])
    return steps

# Alustetaan taulukko
my_array = [64, 34, 25, 12, 22, 11, 90, 5]
steps = bubble_sort_visual(my_array)

# Animaatioon liittyvät asetukset
fig, ax = plt.subplots()
bar_rects = ax.bar(range(len(my_array)), steps[0], align="center", alpha=0.7)

def update(frame):
    for rect, val in zip(bar_rects, steps[frame]):
        rect.set_height(val)

ani = animation.FuncAnimation(fig, update, frames=len(steps), repeat=False)
plt.title("Bubble Sort Visualization")
plt.show()
