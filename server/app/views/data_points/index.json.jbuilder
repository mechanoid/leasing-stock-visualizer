json.array!(@data_points) do |data_point|
  json.extract! data_point, :id, :date, :consumption
  json.url data_point_url(data_point, format: :json)
end
