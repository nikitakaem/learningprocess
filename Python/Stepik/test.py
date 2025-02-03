import pandas as pd
import hashlib
import os

# Путь к исходному файлу Excel
input_folder = 'C:\\Users\\nikit\\OneDrive\\Desktop\\temporary'
input_file = 'filex.xlsx'
input_path = os.path.join(input_folder, input_file)

# Путь к новому файлу Excel
output_folder = 'C:\\Users\\nikit\\OneDrive\\Desktop\\temporary'
output_file = 'filex_hashed2.xlsx'
output_path = os.path.join(output_folder, output_file)

# Считываем данные из исходного файла Excel
xl = pd.ExcelFile(input_path)

# Функция для хэширования данных в столбцах с использованием MD5
def md5_hash(data):
    return hashlib.md5(str(data).encode('utf-8')).hexdigest()

# Создаем новый файл Excel
with pd.ExcelWriter(output_path, engine='openpyxl') as writer:
    # Для каждой вкладки в исходном файле
    for sheet_name in xl.sheet_names:
        # Считываем данные из текущей вкладки
        df = xl.parse(sheet_name)

        # Хэшируем данные в указанных столбцах
        columns_to_hash = ['Дата заказа', 'Номер телефона', 'Канал продаж', 'Эл почта']
        for column in columns_to_hash:
            df[column] = df[column].apply(md5_hash)

        # Записываем данные в новую вкладку в новый файл Excel
        df.to_excel(writer, sheet_name=sheet_name, index=False)

print(f'Хэширование завершено. Результаты сохранены в файл: {output_path}')